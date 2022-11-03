import { JobService } from './../_services/job.service';
import { JobModel } from './../_model/job/job-model';
import { SharedService } from './../_services/shared.service';
import { Observable } from 'rxjs';
import { FormControl } from '@angular/forms';
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
  myControl = new FormControl('');
  options: string[] = ['One', 'Two', 'Three'];
  filteredOptions?: Observable<string[]>;
  jobList: Job[] = [];

  constructor(
    private router: Router, 
    private sharedServ: SharedService,
    private jobService: JobService
  ) {}

  ngOnInit(): void {
    this.jobService.getAllJob().subscribe({
      next: (data: Job[]) => {
        this.jobList = data;
        console.log(this.jobList)
      },
      error: () => {
        alertify.error("Get data failed!")
      }
    })
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter((option) =>
      option.toLowerCase().includes(filterValue)
    );
  }

  handleClick(id: number) {
    this.router.navigate(['/major-list', {id: id}]);
  }
}
