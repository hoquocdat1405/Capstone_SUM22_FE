import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-addmission-news-detail',
  templateUrl: './addmission-news-detail.component.html',
  styleUrls: ['./addmission-news-detail.component.scss'],
})
export class AddmissionNewsDetailComponent implements OnInit {
  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {}

  changTab(event: any, index: number) {
    var tabs = document.querySelectorAll('.tab-list');
    var activeTab = document.querySelector('.tab-item.active');
    var infoSection = document.querySelectorAll('.info-section');
    var infoSectionActive = document.querySelector('.info-section.active');

    event.target.classList.add('active');
    activeTab?.classList.remove('active');
    infoSection[index].classList.add('active');
    infoSectionActive?.classList.remove('active');
  }

  redirectToSchoolDetail() {
    //TODO : thêm id trường vào đây
    this.router.navigate(['/school',{schoolId:'3eb48a1d-4a13-408e-83a0-003cb529bdc1'}]);
  }
}
