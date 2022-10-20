import { Component, OnInit } from '@angular/core';
import { SharedService } from '../_services/shared.service';
import { Test } from '../_model/test.model';
@Component({
  selector: 'app-quiz-listing-page',
  templateUrl: './quiz-listing-page.component.html',
  styleUrls: ['./quiz-listing-page.component.css'],
})
export class QuizListingPageComponent implements OnInit {
  public tests: Test[] = [];

  constructor(private sharedServ: SharedService) {}

  ngOnInit() {
    this.sharedServ.getAllTest().subscribe((response) => {
      this.tests = response;
      console.log(response);
      console.log("tests"+this.tests[0].createdDate);
    });
  }
}
