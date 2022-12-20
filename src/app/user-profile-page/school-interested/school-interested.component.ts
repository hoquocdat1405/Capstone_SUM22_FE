import { MatDialog } from '@angular/material/dialog';
import { PopupComponent } from './../../popup/popup.component';
import { Router } from '@angular/router';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { UniversityService } from './../../_services/university.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import * as alertify from 'alertifyjs';

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
  displayedColumns: string[] = ['position', 'img', 'name', 'contact', 'removeSave', 'button'];
  dataSource: any;
  constructor(private uni: UniversityService, private router: Router, private dialog: MatDialog) { }

  ngOnInit() {
    alertify.set('notifier', 'position', 'top-center')
    this.getData();
  }

  getData() {
    this.uni.getInterestedUni().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
    });
  }

  goContact(uniName: string) {
    this.router.navigate(['mail', { uniName: uniName }]);
  }

  goDetail(id: string) {
    this.router.navigate(['school', { schoolId: id }]);
  }

  applyFilter(filterValue: any) {
    this.dataSource.filter = filterValue.target.value.trim().toLowerCase();
  }

  removeSaveUni(id: string) {
    let dialogRef = this.dialog.open(PopupComponent, {
      data: {
        title: 'Hủy quan tâm',
        content: 'Xác nhận hủy quan tâm trường này?'
      }
    });

    dialogRef.afterClosed().subscribe({
      next: (data) => {
        if (data === true) {
          this.uni.saveUni(id).subscribe({
            next: () => {
              this.getData();
              alertify.success("Đã hủy quan tâm")
            }
          })
        }
      }
    })
  }
}
