import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { News } from '../_model/news.model';
import { UniversityService } from '../_services/university.service';

@Component({
  selector: 'app-addmission-news-detail',
  templateUrl: './addmission-news-detail.component.html',
  styleUrls: ['./addmission-news-detail.component.scss'],
})
export class AddmissionNewsDetailComponent implements OnInit {
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private uniSer: UniversityService
  ) {}
  id!: string;
  news!: News;

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id')!;
  }

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

  getData() {
    this.uniSer.getNewsById(this.id).subscribe((data) => {
      this.news = data;
    });
  }

  redirectToSchoolDetail(id: string) {
    //TODO : thêm id trường vào đây
    this.router.navigate(['/school', { schoolId: id }]);
  }
}
