import { SharedService } from 'src/app/_services/shared.service';
import { Router, ActivatedRoute } from '@angular/router';
import { JobModel } from './../_model/job/job-model';
import { QuizResult } from './../_model/quiz-result';
import { Title, DomSanitizer } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-disc-quiz-result-detail-page',
  templateUrl: './disc-quiz-result-detail-page.component.html',
  styleUrls: ['./disc-quiz-result-detail-page.component.scss'],
})
export class DiscQuizResultDetailPageComponent implements OnInit {
  result: { labels: string[]; values: number[] };

  discType: { name: string; shorthand: string; imgSrc: string };
  id?: string | null;
  shortName?: string;
  quizResult?: QuizResult;
  job?: JobModel[];
  imageSrc: any;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private sharedServ: SharedService,
    private sanitizer: DomSanitizer,
    private title: Title
  ) {
    this.result = { labels: ['D', 'I', 'S', 'C'], values: [7, 13, 22, 58] };
    this.discType = {
      name: 'Người kiên định',
      shorthand: 'S',
      imgSrc: '../assets/svg/disc-types/disc-s-type.svg',
    };
  }

  ngOnInit() {
    this.title.setTitle('Kết quả DISC');
    this.getData();
  }

  getData() {
    this.id = this.route.snapshot.paramMap.get('id')!;
    this.shortName = this.route.snapshot.paramMap.get('shortName')!;
    this.sharedServ
      .getTestResult(this.id, this.shortName)
      .subscribe((result) => {
        this.quizResult = result;
        this.getJob();
        this.imageSrc = this.sanitizer.bypassSecurityTrustResourceUrl(
          this.quizResult!.resultPictureUrl
        );
        console.log(result);
      });
  }

  getJob() {
    this.sharedServ.getJobCareer(this.quizResult!.id).subscribe({
      next: (data) => {
        this.job = data;
      },
    });
  }
}
