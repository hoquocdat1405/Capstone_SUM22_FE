import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { AddressService } from './../_services/address.service';
import { UniDetail, UniSpec } from './../_model/uni';
import { UniversityService } from './../_services/university.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import * as alertify from 'alertifyjs';
import { PopupComponent } from '../popup/popup.component';
import { MatDialog } from '@angular/material/dialog';
import { Fqa, FqaListModel, FqaTopic } from '../_model/fqa.model';

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
  FqaList: FqaListModel[] = [];

  constructor(
    private route: ActivatedRoute,
    private uniService: UniversityService,
    private router: Router,
    private dialog: MatDialog,
    private title: Title // private addressService: AddressService
  ) {}

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

      this.uniService.getFqaUni(this.schoolId).subscribe({
        next: (data: FqaListModel[]) => {
          this.FqaList = data;
          console.log(this.FqaList);
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
    let dialogRef = this.dialog.open(PopupComponent, {
      data: {
        title: 'Quan tâm',
        content: 'Xác nhận quan tâm trường này ?',
      },
    });

    dialogRef.afterClosed().subscribe({
      next: (data) => {
        if (data === true) {
          this.uniService.saveUni(id).subscribe({
            next: () => {
              alertify.success('Đã lưu thành công');
            },
            error: () => {},
          });
        }
      },
    });
  }
}
