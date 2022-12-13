import { MatTableDataSource } from '@angular/material/table';
import { ProfileService } from './../../_services/profile.service';
import { Router } from '@angular/router';
import { ApplicationModel } from './../../_model/application/application';
import { AuthService } from './../../_services/auth.service';
import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  position: number;
  img: string;
  name: string;
  address: string;
  button: string;
}

@Component({
  selector: 'app-apply',
  templateUrl: './apply.component.html',
  styleUrls: ['./apply.component.scss'],
})
export class ApplyComponent implements OnInit {
  id: string = '';
  displayedColumns: string[] = [
    'index',
    'uniSpecName',
    'uniName',
    'applyDate',
    'status',
    'detail',
  ];
  dataSource: any;

  constructor(
    private profileServ: ProfileService,
    private auth: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.profileServ.getAllApply().subscribe((data) => {
      // this.dataSource = data;
      this.dataSource = new MatTableDataSource(data);
    });
  }

  viewDetail(id: string) {
    this.router.navigate(['profile/apply-detail', { id: id }]);
  }

  applyFilter(filterValue: any) {
    this.dataSource.filter = filterValue.target.value.trim().toLowerCase();
  }
}
