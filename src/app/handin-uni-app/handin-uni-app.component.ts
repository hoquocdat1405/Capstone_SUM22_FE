import { SubmitApplications } from './../_model/uniApplication';
import { Validators, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-handin-uni-app',
  templateUrl: './handin-uni-app.component.html',
  styleUrls: ['./handin-uni-app.component.scss']
})
export class HandinUniAppComponent implements OnInit {
  submitFiles: SubmitApplications[] = [];

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
  });

  finishFormGroup = this.fb.group({
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

  constructor(private fb: FormBuilder) { }

  schoolProfileFileChange(event: any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      const schoolProfile: SubmitApplications = {
        name: "schoolProfile",
        submittedFile: file
      }

      const index = this.submitFiles.findIndex(item => item.name === schoolProfile.name);
      if(index !== -1) {
        this.submitFiles[index].submittedFile = file;
      } else {
        this.submitFiles.push(schoolProfile);
      }

      console.log(this.submitFiles)
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

  ngOnInit(): void {
  }

  submitAll() {

  }

}
