import { Router } from '@angular/router';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { UniversityService } from './../../_services/university.service';
import { Component, OnInit, ViewChild } from '@angular/core';

export interface PeriodicElement {
  position: number;
  img: string;
  name: string;
  address: string;
  button: string;
}

@Component({
  selector: 'app-school-interested',
  templateUrl: './school-interested.component.html',
  styleUrls: ['./school-interested.component.scss'],
})
export class SchoolInterestedComponent implements OnInit {
  @ViewChild(MatPaginator) paginator?: MatPaginator;
  displayedColumns: string[] = ['position', 'img', 'name', 'address', 'button'];
  dataSource: any;
  constructor(private uni: UniversityService, private router: Router) {}

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.uni.getInterestedUni().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
    });
  }

  goDetail(id: string) {
    this.router.navigate(['school', { schoolId: id }]);
  }

  applyFilter(filterValue: any) {
    this.dataSource.filter = filterValue.target.value.trim().toLowerCase();
  }
}
