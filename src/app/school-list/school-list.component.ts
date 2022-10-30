import { AuthService } from './../_services/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import * as alertify from "alertifyjs";

@Component({
  selector: 'app-school-list',
  templateUrl: './school-list.component.html',
  styleUrls: ['./school-list.component.scss']
})
export class SchoolListComponent implements OnInit {
  isFromNav:boolean = false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private authService: AuthService,
    private _location: Location
  ) { }

  ngOnInit(): void {
    alertify.set('notifier', 'position', 'top-center');
    alertify.set('notifier', 'delay', 3);
    this.isFromNav = this.route.snapshot.paramMap.get("fromNav") ? true : false;
    console.log(this.authService.getDecodedToken())
    if(!(this.isFromNav && this.authService.getDecodedToken())) {
      alertify.error('Bạn cần đăng nhập để thực hiện chức năng này');
      this._location.back();
    }
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

  viewSchoolDetail() {
    this.router.navigate(['/school'])
  }

  submitApplication() {
    this.router.navigate(['/submit-application'])
  }
}
