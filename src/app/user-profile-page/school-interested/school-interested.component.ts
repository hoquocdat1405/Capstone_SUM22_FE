import { MatTableDataSource } from '@angular/material/table';
import { UniversityService } from './../../_services/university.service';
import { Component, OnInit } from '@angular/core';

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
  displayedColumns: string[] = ['position', 'img', 'name', 'address', 'button'];
  dataSource: any;
  constructor(private uni: UniversityService) {}

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.uni.getInterestedUni().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
    });
  }
}
