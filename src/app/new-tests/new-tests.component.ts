import { TestTypeEnum } from './../shared/constants/app-const';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { SharedService } from './../_services/shared.service';
import { Test } from './../_model/test.model';
import { Component, OnInit, ViewChildren, QueryList, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-new-tests',
  templateUrl: './new-tests.component.html',
  styleUrls: ['./new-tests.component.scss']
})
export class NewTestsComponent implements OnInit, AfterViewInit {
  tests: Test[] = [];
  @ViewChildren('sectionItem', { read: ElementRef }) sec?: QueryList<ElementRef>
  observer?: IntersectionObserver;
  constructor(
    private sharedServ: SharedService,
    private route: ActivatedRoute,
    private router: Router,
    private title: Title
  ) { }

  ngOnInit(): void {
    this.title.setTitle('Danh sách bài test');
    this.sharedServ.getAllTest().subscribe((response) => {
      this.tests = response;
    });
    this.intersectionObserver();
  }

  ngAfterViewInit() {
    this.sec?.changes.subscribe((d: QueryList<ElementRef>) => {
      d.forEach(item => {
        this.observer?.observe(item.nativeElement)
      })
    })
  }

  intersectionObserver() {
    let options = {
      root: null,
      threshold: 0.2,
      rootMargin: '0px'
    }

    this.observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        entry.target.classList.toggle("show", entry.isIntersecting)
        if(entry.isIntersecting) {
          this.observer?.unobserve(entry.target)
        }
      })
    }, options)
  }

  redirectTest(typeId: number, id: number, type: number) {
    var redirectStr: string = '';
    if (typeId == TestTypeEnum.MBTI_TEST_ID)
      redirectStr = TestTypeEnum.MBTI_TEST;
    else if (typeId == TestTypeEnum.DISC_TEST_ID)
      redirectStr = TestTypeEnum.DISC_TEST;
    else if (typeId == TestTypeEnum.BIGFIVE_TEST_ID)
      redirectStr = TestTypeEnum.BIGFIVE_TEST;
    else if (typeId == TestTypeEnum.HOLLAND_TEST_ID)
      redirectStr = TestTypeEnum.HOLLAND_TEST;
    console.log('id : ' + id);
    console.log(redirectStr + '-quiz-attempt?id=' + id);
    if (type == 0)
      this.router.navigate([redirectStr + '-quiz-attempt', { id: id }]);
    else this.router.navigate([redirectStr + '-quiz-detail', { id: id }]);
  }
}
