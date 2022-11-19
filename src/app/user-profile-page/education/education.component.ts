import { AngularFireDatabase } from '@angular/fire/compat/database';
import { map } from 'rxjs/operators';
import { AuthService } from './../../_services/auth.service';
import { FileuploadService } from './../../_services/fileupload.service';
import { FileUpload } from './../../_model/file';
import { Component, OnInit } from '@angular/core';
import * as alertify from 'alertifyjs';
import { Profile } from './../../_model/User';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {
  selectedSchoolProfileFiles?: FileList;
  selectedSchoolDegreeFiles?: FileList;
  // fileList?: FileList;
  currentFileUpload?: FileUpload;
  percentage = 0;
  schoolProfileName: string = "";
  schoolDegreeName: string = "";
  fileUploads?: void;
  schoolProfileUrl?: string;
  schoolDegreeUrl?: string;

  userId: string = this.authService.getDecodedToken().nameid;

  constructor(
    private uploadService: FileuploadService,
    private authService: AuthService,
  ) { }

  ngOnInit() {
    alertify.set('notifier', 'position', 'top-center');
    alertify.set('notifier', 'delay', 3);
    // this.uploadService.getFiles(6).snapshotChanges().pipe(
    //   map(changes => {
    //     changes.map(c => ({key: c.payload.key, ...c.payload.val() }))
    //   })
    // ).subscribe(fileUploads => {
    //   this.fileUploads = fileUploads;
    //   console.log(this.fileUploads)
    // })
    // console.log(this.uploadService.getFileDetailList());
    this.reloadFiles();
  }

  reloadFiles() {
    this.uploadService.getFile(this.userId, "school_profile")
      .subscribe({
        next: (data) => {
          this.schoolProfileUrl = data;
        }
      })
    this.uploadService.getFile(this.userId, "school_degree")
      .subscribe({
        next: (data) => {
          this.schoolDegreeUrl = data;
        }
      })
  }

  uploadSchoolProfile() {
    document.getElementById('upload-school-profile')?.click();
  }

  uploadSchoolDegree() {
    document.getElementById('upload-school-degree')?.click();
  }

  selectSchoolProfileFile(event: any): void {
    const reader = new FileReader();
    this.selectedSchoolProfileFiles = event.target.files;
    if (this.selectedSchoolProfileFiles) {
      this.schoolProfileName = this.selectedSchoolProfileFiles.item(0)!.name;
      reader.onload = e => this.schoolProfileUrl = reader.result + "";
      reader.readAsDataURL(event.target.files[0]);
    }
  }

  selectSchoolDegreeFile(event: any): void {
    const reader = new FileReader();
    this.selectedSchoolDegreeFiles = event.target.files;
    if (this.selectedSchoolDegreeFiles) {
      this.schoolDegreeName = this.selectedSchoolDegreeFiles.item(0)!.name;
      reader.onload = e => this.schoolDegreeUrl = reader.result + "";
      reader.readAsDataURL(event.target.files[0]);
    }
  }

  saveAll(): void {
    var schoolProfile: any;
    var schoolDegree: any;
    if (this.selectedSchoolProfileFiles) {
      schoolProfile = this.selectedSchoolProfileFiles!.item(0)!;
      if (this.schoolProfileUrl) {
        this.uploadService.delete(this.userId, "school_profile")
      }
      this.upload("school_profile", schoolProfile);
    }

    if (this.selectedSchoolDegreeFiles) {
      schoolDegree = this.selectedSchoolDegreeFiles!.item(0)!;
      if (this.schoolDegreeUrl) {
        this.uploadService.delete(this.userId, "school_degree")
      }
      this.upload("school_degree", schoolDegree);

    }
    
    this.reloadFiles();
  }

  upload(fileRole: string, file: File) {
    this.currentFileUpload = new FileUpload(file);
    const userId = this.userId;
    this.uploadService.pushFileToStorage(userId, fileRole, this.currentFileUpload).subscribe({
      next: (percentage) => {
        this.percentage = Math.round(percentage ? percentage : 0);
        if(this.percentage === 0) {
          alertify.warn("Đang tải lên")
        }
        if(this.percentage === 100) {
          alertify.success("Tải lên thành công")
        }
      },
      error: (error) => {
        alertify.error("Có lỗi xảy ra: " + error)
      }
    })
  }
}