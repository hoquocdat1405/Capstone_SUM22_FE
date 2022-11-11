import { AddressService } from './../_services/address.service';
import { UniDetail } from './../_model/uni';
import { UniversityService } from './../_services/university.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-school-info-page',
  templateUrl: './school-info-page.component.html',
  styleUrls: ['./school-info-page.component.scss'],
})
export class SchoolInfoPageComponent implements OnInit {
  schoolId: string = "";
  uniDetail?: UniDetail;
  wardName: string = '';

  constructor(
    private route: ActivatedRoute, 
    private uniService: UniversityService, 
    // private addressService: AddressService
  ) { }

  header = 'Header';
  contents = [
    'Content1sssssss',
    'Content2aaaa',
    'Content3sasas',
    'Contentssss4',
  ];

  ngOnInit() {
    this.schoolId = this.route.snapshot.paramMap.get('schoolId')!;
    if (this.schoolId) {
      this.uniService.getUniById(this.schoolId).subscribe({
        next: (data: UniDetail) => {
          this.uniDetail = data;
        }
      })
    }
  }
}
