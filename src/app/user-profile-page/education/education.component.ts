import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import * as alertify from 'alertifyjs';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { FileUpload } from 'src/app/_model/file';
import { PopupComponent } from './../../popup/popup.component';
import { Highschool } from './../../_model/highschool';
import { SubmitApplications } from './../../_model/uniApplication';
import { AcaProfile, Profile, UpdateAca } from './../../_model/User';
import { AuthService } from './../../_services/auth.service';
import { FileuploadService } from './../../_services/fileupload.service';
import { HighschoolService } from './../../_services/highschool.service';
import { ProfileService } from './../../_services/profile.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {
  acaProfile?: AcaProfile;
  highSchoolList: Highschool[] = [];
  highSchoolName?: string;
  filteredOptions?: Observable<string[]>;

  userProfile?: Profile;
  gender: string = '';
  schoolId: string = '';
  currentFileUpload?: FileUpload;
  selectedIndex: number = 0;
  currentSchoolProfileIndex: number = -1;
  schoolProfileList: SubmitApplications[] = [];

  schoolProfile1Name?: string;
  schoolProfile2Name?: string;
  schoolProfile3Name?: string;
  schoolProfile4Name?: string;

  schoolProfile1Src?: string;
  schoolProfile2Src?: string;
  schoolProfile3Src?: string;
  schoolProfile4Src?: string;

  maxSchoolProfileIndex: number = 1;

  @ViewChild('schoolProfileInput') schoolProfileEle?: ElementRef<HTMLElement>;

  userId: string = this.authService.getDecodedToken().nameid;

  constructor(
    private uploadService: FileuploadService,
    private authService: AuthService,
    private profileService: ProfileService,
    private highSchoolService: HighschoolService,
    private fb: FormBuilder,
    private dialog: MatDialog,
    private http: HttpClient
  ) { }

  ngOnInit() {
    alertify.set('notifier', 'position', 'top-center');
    alertify.set('notifier', 'delay', 3);
    this.reloadFiles();
    this.getAcaProfile();
  }

  getAcaProfile() {
    this.profileService.getAcaProfile().subscribe({
      next: (data: AcaProfile) => {
        this.acaProfile = data;

        this.highSchoolService.getHighschool().subscribe({
          next: (data: Highschool[]) => {
            this.highSchoolList = data;
            this.filteredOptions = (
              this.eduForm.get('highSchoolName') as FormControl
            ).valueChanges.pipe(
              startWith(''),
              map((value) => this._filter(value || ''))
            );
            this.highSchoolName = this.highSchoolList.find(o => o.id === this.acaProfile?.highSchoolId)?.highSchoolName;
            this.eduForm.patchValue({
              highSchoolName: this.highSchoolName,
              graduationYear: this.acaProfile?.graduationYear,
              averageScore: this.acaProfile?.averageScore,
              academicRank: this.acaProfile?.academicRank,
            })
          }
        })
      }
    })
  }

  eduForm = this.fb.group({
    highSchoolName: [''],
    graduationYear: ['', [Validators.pattern(/^-?(0|[1-9]\d*)?$/), Validators.minLength(4), Validators.maxLength(4)]],
    averageScore: ['', [Validators.pattern(/^[0-9]{1,2}([.][0-9]{1,2})?$/)]],
    academicRank: [''],
  })

  get f() {
    return this.eduForm.controls;
  }

  reloadFiles() {
    this.schoolProfileList = [];
    this.uploadService.getFile(this.userId, "schoolProfile1")
      .subscribe({
        next: (data) => {
          this.schoolProfile1Src = data;
          this.maxSchoolProfileIndex = this.maxSchoolProfileIndex > 2 ? this.maxSchoolProfileIndex : 2
          const file: File = new File([], "Empty");
          const submitApp: SubmitApplications = {
            name: "schoolProfile1",
            submittedFile: file
          }
          // this.schoolProfileList.push(submitApp);
          this.schoolProfileList[0] = submitApp;
        }
      })
    this.uploadService.getFile(this.userId, "schoolProfile2")
      .subscribe({
        next: (data) => {
          this.schoolProfile2Src = data;
          this.maxSchoolProfileIndex = this.maxSchoolProfileIndex > 3 ? this.maxSchoolProfileIndex : 3
          const file: File = new File([], "Empty");
          const submitApp: SubmitApplications = {
            name: "schoolProfile2",
            submittedFile: file
          }
          this.schoolProfileList[1] = submitApp;
        }
      })
    this.uploadService.getFile(this.userId, "schoolProfile3")
      .subscribe({
        next: (data) => {
          this.schoolProfile3Src = data;
          this.maxSchoolProfileIndex = this.maxSchoolProfileIndex > 4 ? this.maxSchoolProfileIndex : 4
          const file: File = new File([], "Empty");
          const submitApp: SubmitApplications = {
            name: "schoolProfile3",
            submittedFile: file
          }
          // this.schoolProfileList.push(submitApp);
          this.schoolProfileList[2] = submitApp;
        }
      })
    this.uploadService.getFile(this.userId, "schoolProfile4")
      .subscribe({
        next: (data) => {
          this.schoolProfile4Src = data;
          this.maxSchoolProfileIndex = this.maxSchoolProfileIndex > 5 ? this.maxSchoolProfileIndex : 5
          const file: File = new File([], "Empty");
          const submitApp: SubmitApplications = {
            name: "schoolProfile4",
            submittedFile: file
          }
          // this.schoolProfileList.push(submitApp);
          this.schoolProfileList[3] = submitApp;
        }
      })
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    let result: string[] = [];
    this.highSchoolList.filter((option) => option.highSchoolName.toLowerCase().includes(filterValue))
      .forEach((item) => result.push(item.highSchoolName));
    return result;
  }

  schoolProfileFileChange(event: any) {
    // if (this.currentSchoolProfileIndex > this.schoolProfileList.length) {
    //   alertify.error('Tối đa 4 file được nhập');
    //   return;
    // }

    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      if (!file.type.includes("image")) {
        alertify.error("Vui lòng chọn hình ảnh");
        return;
      }
      const reader = new FileReader();
      const selectedSchoolProfileFile: FileList = event.target.files;

      switch (this.currentSchoolProfileIndex) {
        case 1:
          if (selectedSchoolProfileFile) {
            this.schoolProfile1Name = selectedSchoolProfileFile.item(0)!.name;
            reader.onload = e => this.schoolProfile1Src = reader.result + "";
            reader.readAsDataURL(event.target.files[0]);
          }
          break;
        case 2:
          if (selectedSchoolProfileFile) {
            this.schoolProfile2Name = selectedSchoolProfileFile.item(0)!.name;
            reader.onload = e => this.schoolProfile2Src = reader.result + "";
            reader.readAsDataURL(event.target.files[0]);
          }
          break;
        case 3:
          if (selectedSchoolProfileFile) {
            this.schoolProfile3Name = selectedSchoolProfileFile.item(0)!.name;
            reader.onload = e => this.schoolProfile3Src = reader.result + "";
            reader.readAsDataURL(event.target.files[0]);
          }
          break;
        case 4:
          if (selectedSchoolProfileFile) {
            this.schoolProfile4Name = selectedSchoolProfileFile.item(0)!.name;
            reader.onload = e => this.schoolProfile4Src = reader.result + "";
            reader.readAsDataURL(event.target.files[0]);
          }
          break;

        default:
          break;
      }

      if (this.maxSchoolProfileIndex <= this.currentSchoolProfileIndex && this.maxSchoolProfileIndex < 4) {
        this.maxSchoolProfileIndex++;
      }

      if(this.currentSchoolProfileIndex !== -1) {
        const schoolProfile: SubmitApplications = {
          name: 'schoolProfile' + this.currentSchoolProfileIndex,
          submittedFile: file,
        };

        this.schoolProfileList[this.currentSchoolProfileIndex - 1] = schoolProfile;
      } else {
        const schoolProfile: SubmitApplications = {
          name: 'schoolProfile' + (this.schoolProfileList.length + 1),
          submittedFile: file,
        };

        this.schoolProfileList.push(schoolProfile);
      }
      this.currentSchoolProfileIndex = -1;
      console.log(this.schoolProfileList)
    }
  }

  schoolProfileClick(schoolProfileIndex: number) {
    let el: HTMLElement = this.schoolProfileEle?.nativeElement!;
    this.currentSchoolProfileIndex = schoolProfileIndex;

    el.click();
  }

  saveAll(): void {
    let dialogRef = this.dialog.open(PopupComponent, {
      data: {
        title: 'Lưu thay đổi',
        content: 'Xác nhận lưu thông tin thay đổi ?'
      }
    });

    dialogRef.afterClosed().subscribe({
      next: (data) => {
        if (data === true) {
          const highSchoolFound = this.highSchoolList.find(o => o.highSchoolName === this.f['highSchoolName'].value.toString())
          if (highSchoolFound) {
            const updateAca: UpdateAca = {
              id: this.acaProfile!.id,
              highSchoolId: highSchoolFound.id,
              graduationYear: this.f['graduationYear'].value.toString(),
              averageScore: this.f['averageScore'].value.toString(),
              academicRank: this.f['academicRank'].value.toString(),
            }
            console.log(updateAca)
            console.log(this.schoolProfileList)
            this.profileService.updateAcaProfile(updateAca).subscribe({
              next: () => {
                this.schoolProfileList.forEach(item => {
                  const uploadFile: FileUpload = new FileUpload(item.submittedFile)
                  if(uploadFile.file?.name !== "Empty") {
                    this.uploadService.pushFileToStorage(this.userId, item.name, uploadFile).subscribe({
                      next: (data) => {
                        if (data === 100) {
                          alertify.success("Cập nhật hồ sơ thành công")
                        }
                      }
                    })
                  }
                })
              }
            })

          } else {
            alertify.error("Tên trường không hợp lệ")
            return;
          }
        }
      }
    })
  }
}