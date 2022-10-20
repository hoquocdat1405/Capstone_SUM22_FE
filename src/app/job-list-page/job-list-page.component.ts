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
  myControl = new FormControl('');
  options: string[] = ['One', 'Two', 'Three'];
  filteredOptions?: Observable<string[]>;
  constructor(private router: Router) {}

  ngOnInit(): void {
    // this.filteredOptions = this.myControl.valueChanges.pipe(
    //   startWith(''),
    //   map(value => this._filter(value || '')),
    // );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter((option) =>
      option.toLowerCase().includes(filterValue)
    );
  }

  handleClick() {
    this.router.navigate(['/job-detail']);
  }
}
