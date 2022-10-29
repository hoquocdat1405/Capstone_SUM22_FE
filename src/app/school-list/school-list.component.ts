import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-school-list',
  templateUrl: './school-list.component.html',
  styleUrls: ['./school-list.component.scss']
})
export class SchoolListComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  search = this.fb.group({
    searchInput: [""]
  })

  get searchForm():FormGroup {
    return this.search.controls as unknown as FormGroup;
  }

  searchSchool() {
    console.log("Search")
  }
}
