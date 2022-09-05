// import { DecimalPipe } from '@angular/common';
import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatPaginator, MatPaginatorIntl } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ApplicationElement } from 'src/app/_model/staff/ApplicationsElement';
import { NewsElement } from 'src/app/_model/staff/NewsElement';
// import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-campaign-detail',
  templateUrl: './campaign-detail.component.html',
  styleUrls: ['./campaign-detail.component.scss'],
})
export class CampaignDetailComponent implements AfterViewInit {

  @ViewChild('paginatorNews') paginatorNews!: MatPaginator;
  @ViewChild('paginatorApplications') paginatorApplications!: MatPaginator;

  newsDisplayedColumns: string[] = [
    'status',
    'name',
    'view',
    'applicationNum',
    'publishedDate',
  ];

  applicationsDisplayedColumns: string[] = [
    'studentName',
    'uniSpec',
    'publishedDate',
    'state',
  ];

  newsDataSource = new MatTableDataSource<NewsElement>(NEWS_DATA);
  applicationDataSource = new MatTableDataSource<ApplicationElement>(APPLICATION_DATA);

  pageSize: number = 5;
  pageSizeOptions = [5, 10];

  selectedTabChange(event: any) {
    this.newsDataSource.paginator = this.paginatorNews;
    this.applicationDataSource.paginator = this.paginatorApplications;
  }

  ngAfterViewInit(): void {
    this.paginatorNews.pageSize = this.pageSize;
    this.paginatorApplications.pageSize = this.pageSize;

    this.newsDataSource.paginator = this.paginatorNews;
    this.applicationDataSource.paginator = this.paginatorApplications;


  }
  constructor() {

  }
}


const NEWS_DATA: NewsElement[] = [
  {
    id: 1,
    name: 'string',
    view: 1,
    applicationNum: 2,
    publishedDate: new Date('2022-08-02'),
    status: true,
  },
  {
    id: 2,
    name: 'string',
    view: 1,
    applicationNum: 2,
    publishedDate: new Date('2022-08-12'),
    status: true,
  },
  {
    id: 3,
    name: 'string',
    view: 1,
    applicationNum: 2,
    publishedDate: new Date('2022-08-23'),
    status: true,
  },
  {
    id: 4,
    name: 'string',
    view: 1,
    applicationNum: 2,
    publishedDate: new Date('2022-08-30'),
    status: true,
  },
];

const APPLICATION_DATA: ApplicationElement[] = [
  {
    id: 1,
    studentName: "Nguyễn Thanh Liêm",
    uniSpec: "Kĩ Thuật Phần Mềm",
    publishedDate: new Date(),
    state: "Chờ duyệt",
    status: true
  },
  {
    id: 2,
    studentName: "Hồ Quốc Đạt",
    uniSpec: "Quản Trị Kinh Doanh",
    publishedDate: new Date(),
    state: "Từ chối",
    status: true
  },
  {
    id: 3,
    studentName: "Đặng Dương Khâm",
    uniSpec: "Truyền Thông Đa Phương Tiện",
    publishedDate: new Date(),
    state: "Đã Duyệt",
    status: true
  },
  {
    id: 3,
    studentName: "Đặng Dương Khâm",
    uniSpec: "Truyền Thông Đa Phương Tiện",
    publishedDate: new Date(),
    state: "Đã Duyệt",
    status: true
  },
  {
    id: 3,
    studentName: "Đặng Dương Khâm",
    uniSpec: "Truyền Thông Đa Phương Tiện",
    publishedDate: new Date(),
    state: "Đã Duyệt",
    status: true
  },
  {
    id: 3,
    studentName: "Đặng Dương Khâm",
    uniSpec: "Truyền Thông Đa Phương Tiện",
    publishedDate: new Date(),
    state: "Đã Duyệt",
    status: true
  },
  {
    id: 3,
    studentName: "Nguyễn Phạm Hoàng Ân",
    uniSpec: "Trí Tuệ Nhân Tạo",
    publishedDate: new Date(),
    state: "Bổ Sung Hồ Sơ",
    status: true
  },
];
