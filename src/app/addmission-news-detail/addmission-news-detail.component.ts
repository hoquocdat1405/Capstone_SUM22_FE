import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addmission-news-detail',
  templateUrl: './addmission-news-detail.component.html',
  styleUrls: ['./addmission-news-detail.component.scss'],
})
export class AddmissionNewsDetailComponent implements OnInit {
  constructor() {}

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
}
