import { startWith, map } from 'rxjs/operators';
import { JobService } from './../_services/job.service';
import { JobModel } from './../_model/job/job-model';
import { SharedService } from './../_services/shared.service';
import { Observable } from 'rxjs';
import { FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Job } from './../_model/job';
import { Component, OnInit } from '@angular/core';
import * as alertify from "alertifyjs";

@Component({
  selector: 'app-job-list-page',
  templateUrl: './job-list-page.component.html',
  styleUrls: ['./job-list-page.component.scss'],
})
export class JobListPageComponent implements OnInit {
  job?: JobModel;
  filteredOptions?: Observable<string[]>;
  jobList: Job[] = [];
  displayedJobList: Job[] = [];

  constructor(
    private router: Router, 
    private sharedServ: SharedService,
    private jobService: JobService,
    private fb: FormBuilder
  ) {}

  myForm = this.fb.group({
    jobName: [''],
    majorName: [''],
    specName: ['']
  })

  // getErrorMessage() {
  //   return this.f['jobName'].hasError('required') ? 'Vui lòng nhập tên nghề nghiệp cần tìm' : '';
  // }

  get f() {
    return this.myForm.controls;
  }

  ngOnInit(): void {
    this.jobService.getAllJob().subscribe({
      next: (data: Job[]) => {
        this.jobList = data;
        this.displayedJobList = this.jobList;
        this.filteredOptions = (this.myForm.get('jobName') as FormControl).valueChanges.pipe(
          startWith(''),
          map(value => this._filter(value || '')),
        );
      },
      error: () => {
        alertify.error("Get data failed!")
      }
    })
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.jobList.filter(option => option.jobName.toLowerCase().includes(filterValue)).map(job => job.jobName);
  }

  handleClick(id: number) {
    this.router.navigate(['/major-list', {id: id}]);
  }

  searchJob() {
    this.displayedJobList = this.jobList.filter(job => job.jobName.toLowerCase().includes((this.f['jobName'].value as string).toLowerCase()));
  }
}
