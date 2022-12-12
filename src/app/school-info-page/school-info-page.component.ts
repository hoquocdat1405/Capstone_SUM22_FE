import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { AddressService } from './../_services/address.service';
import { UniDetail, UniSpec } from './../_model/uni';
import { UniversityService } from './../_services/university.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import * as alertify from 'alertifyjs';

@Component({
  selector: 'app-school-info-page',
  templateUrl: './school-info-page.component.html',
  styleUrls: ['./school-info-page.component.scss'],
})
export class SchoolInfoPageComponent implements OnInit {
  schoolId: string = '';
  uniDetail?: UniDetail;
  wardName: string = '';
  uniSpecList: UniSpec[] = [];
  sendApplicationTooltip: string = '';

  constructor(
    private route: ActivatedRoute,
    private uniService: UniversityService,
    private router: Router,
    private title: Title // private addressService: AddressService
  ) {}

  header = 'Header';
  contents = [
    'Content1sssssss',
    'Content2aaaa',
    'Content3sasas',
    'Contentssss4',
  ];

  ngOnInit() {
    this.title.setTitle('Chi tiết trường học');
    alertify.set('notifier', 'position', 'top-center');

    this.schoolId = this.route.snapshot.paramMap.get('schoolId')!;
    if (this.schoolId) {
      this.uniService.getUniById(this.schoolId).subscribe({
        next: (data: UniDetail) => {
          this.uniDetail = data;
        },
      });

      this.uniService.getUniSpecById(this.schoolId).subscribe({
        next: (data: UniSpec[]) => {
          this.uniSpecList = data;
        },
      });
    }
    this.sendApplicationTooltip = 'Gửi hồ sơ để nhận được tư vấn';
  }

  submitApplication() {
    this.router.navigate(['/submit-application', { schoolId: this.schoolId }]);
  }

  saveSchool(id: string) {
    this.uniService.saveUni(id).subscribe({
      next: () => {
        // console.log("success");
        alertify.success('Đã lưu thành công');
      },
      error: () => {},
    });
  }
}
