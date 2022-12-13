import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import * as alertify from 'alertifyjs';
import { University } from './../_model/uni';
import { AuthService } from './../_services/auth.service';
import { UniversityService } from './../_services/university.service';

@Component({
  selector: 'app-school-list',
  templateUrl: './school-list.component.html',
  styleUrls: ['./school-list.component.scss'],
})
export class SchoolListComponent implements OnInit {
  isFromNav: boolean = false;
  uniList: University[] = [];
  resultUni: University[] = [];
  idMajor?: string;
  isFromMajor: boolean = false;
  displayedUniList: University[] = [];

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private authService: AuthService,
    private _location: Location,
    private uniService: UniversityService,
    private title: Title
  ) {}

  ngOnInit(): void {
    this.title.setTitle('Danh sách trường học');

    alertify.set('notifier', 'position', 'top-center');
    alertify.set('notifier', 'delay', 3);
    this.isFromNav = this.route.snapshot.paramMap.get('fromNav') ? true : false;
    if (!(this.isFromNav || this.authService.getDecodedToken())) {
      alertify.error('Bạn cần đăng nhập để thực hiện chức năng này');
      this._location.back();
    }

    this.idMajor = this.route.snapshot.paramMap.get('id')!;
    if (this.idMajor) {
      this.getSchoolList(this.idMajor);
      this.isFromMajor = true;
      // console.log("i'm here")
    } else {
      this.uniService.getAllUniversity().subscribe({
        next: (data: University[]) => {
          this.uniList = data;
          this.displayedUniList = this.uniList;
        },
        error: () => {
          alertify.error('Something error!');
        },
      });
    }
  }

  getSchoolList(id: string) {
    this.uniService.getUniversityByMajor(id).subscribe((data) => {
      this.resultUni = data;
      this.displayedUniList = this.resultUni;
    });
  }

  search = this.fb.group({
    schoolNameCtl: [''],
  });

  get f() {
    return this.search.controls;
  }

  searchSchool() {
    if (this.resultUni.length > 0) {
      this.displayedUniList = this.resultUni.filter((uni) =>
        uni.uniName
          .toLowerCase()
          .includes((this.f['schoolNameCtl'].value as string).toLowerCase())
      );
    } else {
      this.displayedUniList = this.uniList.filter((uni) =>
        uni.uniName
          .toLowerCase()
          .includes((this.f['schoolNameCtl'].value as string).toLowerCase())
      );
    }
  }

  viewSchoolDetail(uniId: string) {
    this.router.navigate(['/school', { schoolId: uniId }]);
  }

  submitApplication(uniId: string) {
    this.router.navigate(['/submit-application', { schoolId: uniId }]);
  }

  considerUni(uniId: string) {
    this.uniService.saveUni(uniId).subscribe({
      next: () => {
        alertify.success('Đã lưu thành công');
      },
      error: () => {},
    });
  }
}
