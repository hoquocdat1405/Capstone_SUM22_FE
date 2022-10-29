import { JobModel } from './../_model/job/job-model';
import { SharedService } from './../_services/shared.service';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

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
  constructor(private router: Router, private sharedServ: SharedService) {}

  ngOnInit(): void {}

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter((option) =>
      option.toLowerCase().includes(filterValue)
    );
  }

  handleClick() {
    this.router.navigate(['/school-list']);
  }
}
