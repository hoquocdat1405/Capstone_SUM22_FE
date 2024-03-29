import { Title } from '@angular/platform-browser';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import * as alertify from 'alertifyjs';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { Application } from '../_model/application/application';
import { UniDetail, UniSpec } from '../_model/uni';
import { District, Province } from './../_model/address';
import {
  ApplicationDetail,
  ApplicationModel,
} from './../_model/application/application';
import { FileUpload } from './../_model/file';
import { SubmitApplications } from './../_model/uniApplication';
import { Profile } from './../_model/User';
import { AddressService } from './../_services/address.service';
import { ApplicationService } from './../_services/application.service';
import { AuthService } from './../_services/auth.service';
import { FileuploadService } from './../_services/fileupload.service';
import { ProfileService } from './../_services/profile.service';
import { UniversityService } from './../_services/university.service';

@Component({
  selector: 'app-handin-uni-app',
  templateUrl: './handin-uni-app.component.html',
  styleUrls: ['./handin-uni-app.component.scss'],
})
export class HandinUniAppComponent implements OnInit {
  submitFiles: SubmitApplications[] = [];
  userProfile?: Profile;
  gender: string = '';
  schoolId: string = '';
  uniSpecList: UniSpec[] = [];
  filteredOptions?: Observable<string[]>;
  path: string = '';
  selectedFiles?: FileList;
  currentFileUpload?: FileUpload;
  percentage?: number;
  uniDetail?: UniDetail;
  dateOfBirth?: Date;
  dateOfBirthControl!: FormControl;
  schoolProfileList: SubmitApplications[] = [];
  selectedIndex: number = 0;
  genderControl!: FormControl;
  abilityTwelveControl!: FormControl;
  uniSpecId?: number;
  applicationList: ApplicationModel[] = [];
  currentSchoolProfileIndex: number = 1;
  maxSchoolProfileIndex: number = 1;

  provinceList: Province[] = [];
  districtList: District[] = [];

  provinceFilteredOptions?: Observable<string[]>;
  districtFilteredOptions?: Observable<string[]>;

  schoolProfile1Name?: string;
  schoolProfile2Name?: string;
  schoolProfile3Name?: string;
  schoolProfile4Name?: string;

  schoolProfile1Src?: string;
  schoolProfile2Src?: string;
  schoolProfile3Src?: string;
  schoolProfile4Src?: string;

  frontId: string = '';
  backId: string = '';

  frontIdSrc?: string;
  frontIdName?: string;

  backIdSrc?: string;
  backIdName?: string;

  @ViewChild('schoolProfileInput') schoolProfileEle?: ElementRef<HTMLElement>;
  @ViewChild('frontImg') frontImgEle?: ElementRef<HTMLElement>;
  @ViewChild('backImg') backImgEle?: ElementRef<HTMLElement>;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private route: ActivatedRoute,
    private uniService: UniversityService,
    private af: AngularFireStorage,
    private uploadService: FileuploadService,
    private addressService: AddressService,
    private applicationService: ApplicationService,
    private profileService: ProfileService,
    private title: Title
  ) {}

  ngOnInit(): void {
    this.title.setTitle('Nộp hồ sơ');
    alertify.set('notifier', 'position', 'top-center');
    this.schoolId = this.route.snapshot.paramMap.get('schoolId')!;
    this.uniService.getUniById(this.schoolId).subscribe({
      next: (data: UniDetail) => {
        this.uniDetail = data;
      },
    });

    this.uniService.getUniSpecById(this.schoolId).subscribe({
      next: (data: UniSpec[]) => {
        this.uniSpecList = data;
        this.filteredOptions = (
          this.firstFormGroup.get('uniSpec') as FormControl
        ).valueChanges.pipe(
          startWith(''),
          map((value) => this._filter(value || ''))
        );
      },
    });

    this.addressService.getProvince().subscribe({
      next: (data: Province[]) => {
        this.provinceList = data;
        this.provinceFilteredOptions = (
          this.firstFormGroup.get('city') as FormControl
        ).valueChanges.pipe(
          startWith(''),
          map((value) => this._provinceFilter(value || ''))
        );
      },
    });
    this.profileService.getProfileInfo().subscribe({
      next: (data: Profile) => {
        this.userProfile = data;
        this.gender = this.userProfile.gender;
        this.dateOfBirth = new Date(this.userProfile.dateOfBirth);
        this.dateOfBirthControl = new FormControl(this.dateOfBirth);
        this.genderControl = new FormControl(this.gender);
        this.abilityTwelveControl = new FormControl('');
        console.log(this.gender);

        this.firstFormGroup.patchValue({
          name: [this.userProfile.userName],
          sex: [this.userProfile.gender],
          birth: [new Date(this.userProfile.dateOfBirth)],
          address: [this.userProfile.addressNumber],
          cmnd: [this.userProfile.credentialId],
          phone: [this.userProfile.phone],
          email: [this.userProfile.email],
          city: [''],
          district: [''],
          highschool: [this.userProfile.highSchoolName],
          graduateYear: [''],
          gradeTwelve: [''],
          abilityTwelve: [''],
        });
      },
    });

    // this.authService.getUserProfileObserver().subscribe((data: Profile) => {
    //   this.userProfile = data;
    //   this.gender = this.userProfile.gender;
    //   this.dateOfBirth = new Date(this.userProfile.dateOfBirth);
    //   this.dateOfBirthControl = new FormControl(this.dateOfBirth);
    //   this.genderControl = new FormControl(this.gender);
    //   console.log(this.gender);

    //   this.firstFormGroup.patchValue({
    //     name: [this.userProfile.userName],
    //     sex: [this.userProfile.gender],
    //     birth: [new Date(this.userProfile.dateOfBirth)],
    //     address: [this.userProfile.addressNumber],
    //     cmnd: [this.userProfile.credentialId],
    //     phone: [this.userProfile.phone],
    //     email: [this.userProfile.email],
    //     city: [''],
    //     district: [''],
    //     highschool: [this.userProfile.highSchoolName],
    //     graduateYear: [''],
    //     gradeTwelve: [''],
    //     abilityTwelve: [''],
    //   });
    // });

    this.getAllApplication();
  }

  getAllApplication() {
    this.profileService.getAllApply().subscribe({
      next: (data: ApplicationModel[]) => {
        this.applicationList = data;
      },
    });
  }

  ngAfterViewInit() {}

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    let result: string[] = [];
    this.uniSpecList
      .filter((option) =>
        option.uniSpecName.toLowerCase().includes(filterValue)
      )
      .forEach((item) => result.push(item.uniSpecName));
    return result;
  }

  private _provinceFilter(value: string): string[] {
    const filterValue = value.toString().toLowerCase();
    if (
      this.provinceList.filter(
        (x) => x.provinceName.toLowerCase() === filterValue
      ).length === 1
    ) {
      this.addressService
        .getDistrict(
          this.provinceList.filter(
            (x) => x.provinceName.toLowerCase() === filterValue
          )[0].id
        )
        .subscribe({
          next: (data: District[]) => {
            this.districtList = data;
            this.districtFilteredOptions = (
              this.firstFormGroup.get('district') as FormControl
            ).valueChanges.pipe(
              startWith(''),
              map((value) => this._districtFilter(value || ''))
            );
          },
        });
    }
    const result: string[] = this.provinceList
      .filter((option) =>
        option.provinceName.toLowerCase().includes(filterValue)
      )
      .map((x) => x.provinceName);
    return result;
  }

  private _districtFilter(value: string): string[] {
    const filterValue = value.toString().toLowerCase();
    const result: string[] = this.districtList
      .filter((option) =>
        option.districtName.toLowerCase().includes(filterValue)
      )
      .map((x) => x.districtName);
    console.log(result);
    return result;
  }

  firstFormGroup = this.fb.group({
    name: ['', Validators.required],
    sex: ['', Validators.required],
    birth: ['', Validators.required],
    address: ['', Validators.required],
    cmnd: ['', Validators.required],
    phone: ['', Validators.required],
    email: ['', Validators.required],
    uniSpec: ['', Validators.required],
    city: [''],
    district: [''],
    highschool: [''],
    graduateYear: [''],
    gradeTwelve: [''],
    abilityTwelve: [''],
  });

  get getFirstForm() {
    return this.firstFormGroup.controls;
  }

  finishFormGroup = this.fb.group({
    name: ['', Validators.required],
    sex: ['', Validators.required],
    birth: ['', Validators.required],
    address: ['', Validators.required],
    cmnd: ['', Validators.required],
    phone: ['', Validators.required],
    email: ['', Validators.required],
    uniSpec: ['', Validators.required],
    city: [''],
    district: [''],
    highschool: [''],
    graduateYear: [''],
    gradeTwelve: [''],
    abilityTwelve: [''],
    schoolProfile: [''],
    graduate: [''],
    grade: [''],
    frontId: [''],
    backId: [''],
    schoolProfileName: [''],
  });

  get birthControl(): FormControl {
    return this.getFirstForm['birth'] as FormControl;
  }

  secondFormGroup = this.fb.group({
    schoolProfile: [''],
    schoolProfileName: [''],
    frontId: [''],
    backId: [''],
  });

  schoolProfileFileChange(event: any) {
    if (this.schoolProfileList.length >= 4) {
      alertify.error('Tối đa 4 file được nhập');
      return;
    }

    let schoolProfileNameConcat: string = '';

    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      if (!file.type.includes('image')) {
        alertify.error('Vui lòng chọn hình ảnh');
        return;
      }
      const reader = new FileReader();
      const selectedSchoolProfileFile: FileList = event.target.files;

      switch (this.currentSchoolProfileIndex) {
        case 1:
          if (selectedSchoolProfileFile) {
            this.schoolProfile1Name = selectedSchoolProfileFile.item(0)!.name;
            reader.onload = (e) =>
              (this.schoolProfile1Src = reader.result + '');
            reader.readAsDataURL(event.target.files[0]);
          }
          break;
        case 2:
          if (selectedSchoolProfileFile) {
            this.schoolProfile2Name = selectedSchoolProfileFile.item(0)!.name;
            reader.onload = (e) =>
              (this.schoolProfile2Src = reader.result + '');
            reader.readAsDataURL(event.target.files[0]);
          }
          break;
        case 3:
          if (selectedSchoolProfileFile) {
            this.schoolProfile3Name = selectedSchoolProfileFile.item(0)!.name;
            reader.onload = (e) =>
              (this.schoolProfile3Src = reader.result + '');
            reader.readAsDataURL(event.target.files[0]);
          }
          break;
        case 4:
          if (selectedSchoolProfileFile) {
            this.schoolProfile4Name = selectedSchoolProfileFile.item(0)!.name;
            reader.onload = (e) =>
              (this.schoolProfile4Src = reader.result + '');
            reader.readAsDataURL(event.target.files[0]);
          }
          break;

        default:
          break;
      }

      if (
        this.maxSchoolProfileIndex <= this.currentSchoolProfileIndex &&
        this.maxSchoolProfileIndex < 4
      ) {
        this.maxSchoolProfileIndex++;
      }

      this.path = file;

      this.selectedFiles = event.target.files;

      const schoolProfile: SubmitApplications = {
        name: 'app_schoolProfile' + (this.schoolProfileList.length + 1),
        submittedFile: file,
      };

      this.schoolProfileList.push(schoolProfile);

      this.schoolProfileList.forEach((item) => {
        schoolProfileNameConcat += item.submittedFile.name + ' ';
      });
      this.secondFormGroup.patchValue({
        schoolProfileName: schoolProfileNameConcat,
      });
      this.submitFiles.push(schoolProfile);

      console.log(this.submitFiles);
      this.selectedFiles = event.target.files;
    }
  }

  frontIdFileChange(event: any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      if (!file.type.includes('image')) {
        alertify.error('Vui lòng chọn hình ảnh');
        return;
      }
      const reader = new FileReader();
      const selectedFrontIdFile: FileList = event.target.files;
      if (selectedFrontIdFile) {
        this.frontIdName = selectedFrontIdFile.item(0)!.name;
        reader.onload = (e) => (this.frontIdSrc = reader.result + '');
        reader.readAsDataURL(event.target.files[0]);
      }
      const frontId: SubmitApplications = {
        name: 'app_frontId',
        submittedFile: file,
      };

      const index = this.submitFiles.findIndex(
        (item) => item.name === frontId.name
      );
      if (index !== -1) {
        this.submitFiles[index].submittedFile = file;
      } else {
        this.submitFiles.push(frontId);
      }
      console.log(this.submitFiles);
    }
  }

  backIdFileChange(event: any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      if (!file.type.includes('image')) {
        alertify.error('Vui lòng chọn hình ảnh');
        return;
      }
      const reader = new FileReader();
      const selectedBackIdFile: FileList = event.target.files;
      if (selectedBackIdFile) {
        this.backIdName = selectedBackIdFile.item(0)!.name;
        reader.onload = (e) => (this.backIdSrc = reader.result + '');
        reader.readAsDataURL(event.target.files[0]);
      }
      const backId: SubmitApplications = {
        name: 'app_backId',
        submittedFile: file,
      };

      const index = this.submitFiles.findIndex(
        (item) => item.name === backId.name
      );
      if (index !== -1) {
        this.submitFiles[index].submittedFile = file;
      } else {
        this.submitFiles.push(backId);
      }
    }
  }

  submitAll() {
    this.getAllApplication();
    if (
      this.applicationList.filter((x) => {
        return (
          x.uniId === this.schoolId &&
          x.userId === this.authService.getDecodedToken().nameid
        );
      }).length > 0
    ) {
      alertify.error('Bạn đã nộp hồ sơ vào trường này');
      return;
    }
    const userId = this.authService.getDecodedToken().nameid;
    this.uniSpecId = this.uniSpecList.filter(
      (item) => item.uniSpecName === this.firstFormGroup.get('uniSpec')?.value
    )[0].id;
    const application: Application = {
      userId: userId,
      uniId: this.schoolId,
      uniSpecId: this.uniSpecId,
    };

    console.log(this.submitFiles);

    this.applicationService.createApplication(application).subscribe({
      next: (data) => {
        console.log(
          this.clearFormValue(this.finishFormGroup.get('abilityTwelve')?.value)
        );
        const applicationDetail: ApplicationDetail = {
          applicationId: data.id,
          credentialFrontImgUrl: '',
          credentialBackImgUrl: '',
          highSchoolId: '62af0fec-f8ca-4273-8249-7c46e73d7d9b',
          graduationYear: +this.clearFormValue(
            this.finishFormGroup.get('graduateYear')?.value
          ).toString(),
          averageScore: +this.clearFormValue(
            this.finishFormGroup.get('gradeTwelve')?.value
          ).toString(),
          academicRank: this.abilityTwelveControl.value.toString(),
          schoolReport1Url: '',
          schoolReport2Url: '',
          schoolReport3Url: '',
          schoolReport4Url: '',
        };

        //academicRank: this.clearFormValue(this.finishFormGroup.get('abilityTwelve')?.value).toString(),
        this.applicationService
          .createApplicationDetail(applicationDetail)
          .subscribe({
            next: (data) => {
              this.submitFiles.forEach((item) => {
                switch (item.name) {
                  case 'app_schoolProfile1':
                    this.uploadService
                      .pushFileToStorage(
                        userId,
                        this.schoolId + '_' + 'app_schoolProfile1',
                        new FileUpload(item.submittedFile)
                      )
                      .subscribe();
                    break;
                  case 'app_schoolProfile2':
                    this.uploadService
                      .pushFileToStorage(
                        userId,
                        this.schoolId + '_' + 'app_schoolProfile2',
                        new FileUpload(item.submittedFile)
                      )
                      .subscribe();
                    break;
                  case 'app_schoolProfile3':
                    this.uploadService
                      .pushFileToStorage(
                        userId,
                        this.schoolId + '_' + 'app_schoolProfile3',
                        new FileUpload(item.submittedFile)
                      )
                      .subscribe();
                    break;
                  case 'app_schoolProfile4':
                    this.uploadService
                      .pushFileToStorage(
                        userId,
                        this.schoolId + '_' + 'app_schoolProfile4',
                        new FileUpload(item.submittedFile)
                      )
                      .subscribe();
                    break;
                  case 'app_frontId':
                    this.uploadService
                      .pushFileToStorage(
                        userId,
                        this.schoolId + '_' + 'app_frontId',
                        new FileUpload(item.submittedFile)
                      )
                      .subscribe();
                    break;
                  case 'app_backId':
                    this.uploadService
                      .pushFileToStorage(
                        userId,
                        this.schoolId + '_' + 'app_backId',
                        new FileUpload(item.submittedFile)
                      )
                      .subscribe();
                    break;
                  default:
                    break;
                }
              });
              alertify.success('Nộp hồ sơ thành công!');
            },
            error: () => {
              alertify.error('Có lỗi xảy ra');
            },
          });
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  setIndex(event: any) {
    console.log(event);
    this.selectedIndex = event.selectedIndex;
  }

  handleFinalStepClick() {
    if (this.selectedIndex === 2) {
      this.finishFormGroup.patchValue({
        name: [this.firstFormGroup.get('name')?.value],
        sex: [this.firstFormGroup.get('sex')?.value],
        birth: [this.firstFormGroup.get('birth')?.value],
        address: [this.firstFormGroup.get('address')?.value],
        cmnd: [this.firstFormGroup.get('cmnd')?.value],
        phone: [this.firstFormGroup.get('phone')?.value],
        email: [this.firstFormGroup.get('email')?.value],
        uniSpec: [this.firstFormGroup.get('uniSpec')?.value],
        city: [this.firstFormGroup.get('city')?.value],
        district: [this.firstFormGroup.get('district')?.value],
        highschool: [this.firstFormGroup.get('highschool')?.value],
        graduateYear: [this.firstFormGroup.get('graduateYear')?.value],
        gradeTwelve: [this.firstFormGroup.get('gradeTwelve')?.value],
        abilityTwelve: [this.firstFormGroup.get('abilityTwelve')?.value],
        schoolProfile: [this.firstFormGroup.get('schoolProfile')?.value],
        graduate: [this.firstFormGroup.get('graduate')?.value],
        grade: [this.firstFormGroup.get('grade')?.value],
        frontId: [this.firstFormGroup.get('frontId')?.value],
        backId: [this.firstFormGroup.get('backId')?.value],
      });
      this.abilityTwelveControl.setValue(
        this.abilityTwelveControl.value.toString()
      );

      console.log(this.gender);
    }
  }

  clearFormValue(value: any): string {
    if (Array.isArray(value)) {
      return value[0];
    }
    return value;
  }

  schoolProfileClick(schoolProfileIndex: number) {
    let el: HTMLElement = this.schoolProfileEle?.nativeElement!;
    this.currentSchoolProfileIndex = schoolProfileIndex;

    console.log(this.maxSchoolProfileIndex);
    el.click();
  }

  frontImgClick() {
    let el: HTMLElement = this.frontImgEle?.nativeElement!;
    el.click();
  }

  backImgClick() {
    let el: HTMLElement = this.backImgEle?.nativeElement!;
    el.click();
  }

  selectSchoolProfileFile() {}
}
