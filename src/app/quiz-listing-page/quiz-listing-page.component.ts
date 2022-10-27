import { Component, OnInit } from '@angular/core';
import { SharedService } from '../_services/shared.service';
import { Test } from '../_model/test.model';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-quiz-listing-page',
  templateUrl: './quiz-listing-page.component.html',
  styleUrls: ['./quiz-listing-page.component.css'],
})
export class QuizListingPageComponent implements OnInit {
  public tests: Test[] = [];

  constructor(private sharedServ: SharedService,private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.sharedServ.getAllTest().subscribe((response) => {
      this.tests = response;
      console.log(this.tests.length);
      this.tests.forEach(test => {
      test.introduction = test.introduction.slice(0,150) + "...";
      
    });
    });
    

  }

}
