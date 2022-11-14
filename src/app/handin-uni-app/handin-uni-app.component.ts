import { FileuploadService } from './../_services/fileupload.service';
import { FileUpload } from './../_model/file';
import { map, startWith } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { UniversityService } from './../_services/university.service';
import { ActivatedRoute } from '@angular/router';
import { Profile } from './../_model/User';
import { AuthService } from './../_services/auth.service';
import { SubmitApplications } from './../_model/uniApplication';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { UniSpec } from '../_model/uni';
import * as alertify from "alertifyjs";
import { AngularFireStorage } from '@angular/fire/compat/storage';

@Component({
  selector: 'app-handin-uni-app',
  templateUrl: './handin-uni-app.component.html',
  styleUrls: ['./handin-uni-app.component.scss']
})
export class HandinUniAppComponent implements OnInit {
  submitFiles: SubmitApplications[] = [];
  userProfile?: Profile;
  gender: string = "";
  schoolId: string ="";
  uniSpecList: UniSpec[] = [];
  filteredOptions?: Observable<string[]>;
  path:string = '';
  selectedFiles?: FileList;
  currentFileUpload?: FileUpload;
  percentage?: number;

  constructor(
    private fb: FormBuilder, 
    private authService: AuthService, 
    private route: ActivatedRoute,
    private uniService: UniversityService,
    private af: AngularFireStorage,
    private uploadService: FileuploadService
  ) { }

  ngOnInit(): void {
    alertify.set('notifier', 'position', 'top-center');
    this.schoolId = this.route.snapshot.paramMap.get('schoolId')!;
    console.log(this.firstFormGroup.get('uniSpec'))
    this.filteredOptions = (this.firstFormGroup.get('uniSpec') as FormControl).valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '')),
    );
    this.uniService.getUniSpecById(this.schoolId).subscribe({
      next: (data: UniSpec[]) => {
        this.uniSpecList = data;
      }
    })

    this.authService.getUserProfileObserver().subscribe((data: Profile) => {
      console.log(data);
    })
    
    // this.authService.userProfile?.subscribe({
    //   next: (userProfile: Profile) => {
    //     this.userProfile = userProfile;
    //     this.gender = userProfile.gender;
    //     this.firstFormGroup.patchValue(
    //       {
    //         name: this.userProfile.userName,
    //         sex: this.userProfile.gender,
    //         birth: this.userProfile.dateOfBirth,
    //         address: this.userProfile.addressNumber,
    //         cmnd: this.userProfile.credentialId,
    //         phone: this.userProfile.phone,
    //         email: this.userProfile.email,
    //       }
    //     )
    //   }
    // })
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    let result: string[] = []
    this.uniSpecList.filter(option => option.uniSpecName.toLowerCase().includes(filterValue)).forEach(item => result.push(item.uniSpecName));
    console.log(result)
    return result;
  }

  firstFormGroup = this.fb.group({
    name: [''],
    sex: [''],
    birth: [''],
    address: [''],
    cmnd: [''],
    phone: [''],
    email: [''],
    city: [''],
    district: [''],
    highschool: [''],
    graduateYear: [''],
    gradeTwelve: [''],
    abilityTwelve: [''],
    uniSpec: [''],
  });

  finishFormGroup = this.fb.group({
    name: [this.firstFormGroup.value.name || "", []],
    sex: [''],
    birth: [''],
    address: [''],
    cmnd: [''],
    phone: [''],
    email: [''],
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
  })

  secondFormGroup = this.fb.group({
    schoolProfile: [''],
    graduate: [''],
    grade: [''],
    frontId: [''],
    backId: [''],
  });



  schoolProfileFileChange(event: any) {
    if (event.target.files.length > 0) {
      // const file = event.target.files[0];
      // this.path = file;
      // const schoolProfile: SubmitApplications = {
      //   name: "schoolProfile",
      //   submittedFile: file
      // }

      // const index = this.submitFiles.findIndex(item => item.name === schoolProfile.name);
      // if (index !== -1) {
      //   this.submitFiles[index].submittedFile = file;
      // } else {
      //   this.submitFiles.push(schoolProfile);
      // }

      // console.log(this.submitFiles)
      this.selectedFiles = event.target.files;
    }
  }

  graduateFileChange(event: any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      const graduate: SubmitApplications = {
        name: "graduate",
        submittedFile: file
      }

      const index = this.submitFiles.findIndex(item => item.name === graduate.name);
      if (index !== -1) {
        this.submitFiles[index].submittedFile = file;
      } else {
        this.submitFiles.push(graduate);
      }
    }
  }

  gradeFileChange(event: any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      const grade: SubmitApplications = {
        name: "grade",
        submittedFile: file
      }

      const index = this.submitFiles.findIndex(item => item.name === grade.name);
      if (index !== -1) {
        this.submitFiles[index].submittedFile = file;
      } else {
        this.submitFiles.push(grade);
      }
    }
  }

  frontIdFileChange(event: any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      const frontId: SubmitApplications = {
        name: "frontId",
        submittedFile: file
      }

      const index = this.submitFiles.findIndex(item => item.name === frontId.name);
      if (index !== -1) {
        this.submitFiles[index].submittedFile = file;
      } else {
        this.submitFiles.push(frontId);
      }
    }
  }

  backIdFileChange(event: any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      const backId: SubmitApplications = {
        name: "backId",
        submittedFile: file
      }

      const index = this.submitFiles.findIndex(item => item.name === backId.name);
      if (index !== -1) {
        this.submitFiles[index].submittedFile = file;
      } else {
        this.submitFiles.push(backId);
      }
    }
  }

  selectFile(event: any): void {
    this.selectedFiles = event.target.files;
  }

  submitFile() {
    const file = this.selectedFiles!.item(0);
    console.log(this.selectedFiles!.item(0))
    this.selectedFiles = undefined;

    this.currentFileUpload = new FileUpload(file!);
    this.uploadService.pushFileToStorage(this.currentFileUpload).subscribe(
      percentage => {
        this.percentage = Math.round(percentage);
      },
      error => {
        console.log(error);
      }
    );
  }

  submitAll() {
    // console.log(this.firstFormGroup.value)
    // console.log(this.submitFiles)
    // console.log("School ID: " + this.schoolId)
    // console.log("User ID: " + this.userProfile?.id)
    // console.log("Uni Spec: " + this.firstFormGroup.get('uniSpec')?.value)
    // console.log("Uni Spec Id: " + this.uniSpecList.filter(item => item.uniSpecName === this.firstFormGroup.get('uniSpec')?.value)[0].id)
    // let uniSpecId = this.uniSpecList.filter(item => item.uniSpecName === this.firstFormGroup.get('uniSpec')?.value)[0].id;
    // const application: Application = {
    //   userId: this.userProfile!.id,
    //   uniId: this.schoolId,
    //   uniSpecId: uniSpecId
    // }

    // this.applicationService.createApplication(application).subscribe({
    //   next: (data) => {
    //     console.log(data)
    //     const applicationDetail: ApplicationDetail = {
    //       applicationId: data.id,
    //       credentialFrontImgUrl: '',
    //       credentialBackImgUrl: '',
    //       highSchoolCode: "3200349308",
    //       highSchoolName: this.firstFormGroup.get('highSchool')?.value,
    //       highSchoolAddress: this.firstFormGroup.get('city')?.value,
    //       graduationYear: this.firstFormGroup.get('graduateYear')?.value,
    //       avarageScore: this.firstFormGroup.get('gradeTwelve')?.value,
    //       academicRank: this.firstFormGroup.get('abilityTwelve')?.value,
    //       schoolReport1Url: '',
    //       schoolReport2Url: '',
    //       schoolReport3Url: '',
    //       schoolReport4Url: ''
    //     }
    //     this.applicationService.createApplicationDetail(applicationDetail).subscribe({
    //       next: (data) => {
    //         console.log(data)
    //         alertify.success("Submit Application Successfully!")
    //       },
    //       error: () => {
    //         alertify.error("Submit failed");
    //       }
    //     })
    //   },
    //   error: (error) => {
    //     console.log(error)
    //   }
    // })
    // this.driveApis.uploadFile();

  }

}
