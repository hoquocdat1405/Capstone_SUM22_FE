import { FileuploadService } from './../../_services/fileupload.service';
import { FileUpload } from './../../_model/file';
import { Component, OnInit } from '@angular/core';
import * as alertify from 'alertifyjs';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {
  selectedFiles?: FileList;
  currentFileUpload?: FileUpload;
  percentage = 0;
  schoolProfileName: string = "";

  constructor(private uploadService: FileuploadService) { }

  ngOnInit() {
    alertify.set('notifier', 'position', 'top-center');
    alertify.set('notifier', 'delay', 3);
  }

  uploadSchoolProfile() {
    document.getElementById('upload-school-profile')?.click();
  }

  selectFile(event: any): void {
    this.selectedFiles = event.target.files;
    if (this.selectedFiles) {
      this.schoolProfileName = this.selectedFiles.item(0)!.name;
    }
  }

  saveAll(): void {
    if (this.selectedFiles) {
      const file: File | null = this.selectedFiles.item(0);
      this.selectedFiles = undefined;

      if (file) {
        this.currentFileUpload = new FileUpload(file);
        this.uploadService.pushFileToStorage(this.currentFileUpload).subscribe({
          next: (percentage) => {
            this.percentage = Math.round(percentage ? percentage : 0);
            alertify.success("Lưu thành công")
          },
          error: (error) => {
            alertify.error("Có lỗi xảy ra: " + error)
          }
        })
      }
    }
  }
}
