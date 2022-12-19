import { PageEvent } from '@angular/material/paginator';
import { MajorModel } from './../_model/major/major-model';
import { MajorService } from './../_services/major.service';
import { Title } from '@angular/platform-browser';
import { startWith, map, finalize } from 'rxjs/operators';
import { JobService } from './../_services/job.service';
import { JobModel, JobMajorModel } from './../_model/job/job-model';
import { SharedService } from './../_services/shared.service';
import { Observable } from 'rxjs';
import { FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Job } from './../_model/job';
import { Component, OnInit } from '@angular/core';
import * as alertify from 'alertifyjs';


@Component({
  selector: 'app-new-job-list-page',
  templateUrl: './new-job-list-page.component.html',
  styleUrls: ['./new-job-list-page.component.scss']
})
export class NewJobListPageComponent implements OnInit {
  job?: JobModel;
  filteredOptions?: Observable<string[]>;
  jobList: Job[] = [];
  displayedJobList: Job[] = [];
  JobMajorList: JobMajorModel[] = [];
  showedJobList: JobMajorModel[] = [];
  pageIndex?: number;
  cutList: JobMajorModel[] = [];

  constructor(
    private router: Router,
    private sharedServ: SharedService,
    private jobService: JobService,
    private fb: FormBuilder,
    private title: Title,
    private majorService: MajorService
  ) { }


  myForm = this.fb.group({
    jobName: [''],
    majorName: [''],
    specName: [''],
    toppings: ['']
  });

  // getErrorMessage() {
  //   return this.f['jobName'].hasError('required') ? 'Vui lòng nhập tên nghề nghiệp cần tìm' : '';
  // }

  get f() {
    return this.myForm.controls;
  }

  ngOnInit(): void {
    this.title.setTitle('Danh sách ngành nghề');

    this.jobService.getAllJob().subscribe({
      next: (data: Job[]) => {
        this.jobList = data;
        this.displayedJobList = this.jobList;
        this.displayedJobList?.forEach(job => {
          this.majorService.getMajorCareer(job.id.toString()).subscribe({
            next: (data: MajorModel[]) => {
              const jobMajorData: JobMajorModel = {
                id: job.id,
                imageUrl: job.imageUrl,
                description: job.description,
                jobName: job.jobName,
                majorList: data
              }
              this.JobMajorList.push(jobMajorData);
              this.showedJobList.push(jobMajorData);
            },
            complete: () => {
              this.cutList = this.showedJobList.slice(0, 3);
            }
          })
        })
        this.filteredOptions = (
          this.myForm.get('jobName') as FormControl
        ).valueChanges.pipe(
          startWith(''),
          map((value) => this._filter(value || ''))
        );
      },
      error: () => {
        alertify.error('Get data failed!');
      },
    });
  }

  private _filter(value: string): string[] {
    const filterValue = value.toString().toLowerCase();

    return this.JobMajorList
      .filter((option) => option.jobName.toLowerCase().includes(filterValue))
      .map((job) => job.jobName);
  }

  handleClick(id: number) {
    this.router.navigate(['/major-list', { id: id }]);
  }

  searchJob() {
    if(this.f['toppings'].value.toString() === '') {
      this.showedJobList = this.JobMajorList.filter((job) =>
        job.jobName
          .toLowerCase()
          .includes((this.f['jobName'].value as string).toLowerCase())
      );
      this.cutList = this.showedJobList.slice(0, 3);
      this.pageIndex = 0;
    } else {
      const newSearchList: number[] = [];
      (this.f['toppings'].value as Array<string>).forEach(x => {
        if(x === 'MBTI') {
          newSearchList.push(3)
        } else if(x === 'DISC') {
          newSearchList.push(4)
        }
      })
      console.log(newSearchList)
      this.jobService.getJobFiltered().subscribe({
        next: (data: Job[]) => {
          const showJobNew: Job[] = data;
          const newJobMajorList: JobMajorModel[] = [];
          showJobNew.forEach(job => {
            this.majorService.getMajorCareer(job.id.toString()).subscribe({
              next: (majorData: MajorModel[]) => {
                const jobMajorData: JobMajorModel = {
                  id: job.id,
                  imageUrl: job.imageUrl,
                  description: job.description,
                  jobName: job.jobName,
                  majorList: majorData
                }
                newJobMajorList.push(jobMajorData)
                this.showedJobList = newJobMajorList.filter((job) =>
                  job.jobName
                    .toLowerCase()
                    .includes((this.f['jobName'].value as string).toLowerCase())
                );
              },
              complete: () => {
                this.cutList = this.showedJobList.slice(0, 3);
                this.pageIndex = 0;
              }
            })
          })
        }
      })
    }
  }

  goUniver(id: string) {
    this.router.navigate(['/school-list', { id: id }]);
  }

  onPageChange(event: PageEvent) {
    this.cutList = this.showedJobList.slice(3*(event.pageIndex), 3*(event.pageIndex + 1))
  }
}
