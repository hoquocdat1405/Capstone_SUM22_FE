import { Test } from './../_model/test.model';
import { MajorModel } from './../_model/major/major-model';
import { MajorService } from './../_services/major.service';
import { SharedService } from './../_services/shared.service';
import { Router, ActivatedRoute } from '@angular/router';
import { JobModel, JobMajorModel } from './../_model/job/job-model';
import { QuizResult } from './../_model/quiz-result';
import { Title, DomSanitizer } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-holland-quiz-result-detail-page',
  templateUrl: './holland-quiz-result-detail-page.component.html',
  styleUrls: ['./holland-quiz-result-detail-page.component.scss'],
})
export class HollandQuizResultDetailPageComponent implements OnInit {
  id?: string | null;
  shortName?: string;
  quizResult?: QuizResult;
  job?: JobModel[];
  imageSrc: any;
  result: { labels: string[]; values: number[] };
  showedJobList: JobMajorModel[] = [];
  panelOpenState: boolean = false;
  test?: Test;
  testId: string = '';
  characters: QuizResult[] = [];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private sharedServ: SharedService,
    private sanitizer: DomSanitizer,
    private title: Title,
    private majorService: MajorService
  ) {
    this.result = {
      labels: [
        'Kỹ thuật',
        'Nghệ thuật',
        'Nghiên cứu',
        'Xã hội',
        'Quản lí',
        'Nghiệp vụ',
      ],
      values: [35, 1, 32, 29, 16, 24],
    };
  }

  ngOnInit() {
    this.title.setTitle('Kết quả Holland');
    this.getData();
    // this.getCharacter();
  }

  getData() {
    const postAnswer = this.route.snapshot.paramMap.get('postAnswer')!;

    this.sharedServ
      .submitTestHolland(JSON.parse(postAnswer))
      .subscribe((result) => {
        if (result !== null) {
          this.quizResult = result;
          this.getJob();
        }
      });

    // console.log(JSON.parse(postAnswer).testId);
    this.testId = JSON.parse(postAnswer).testId;
    this.getCharacter();
  }

  getCharacter() {
    this.sharedServ.getTestResult(this.testId, '').subscribe((response) => {
      this.characters = response;
    });
  }

  getJob() {
    this.sharedServ.getJobCareer(this.quizResult!.id).subscribe({
      next: (data) => {
        this.job = data;
        this.job?.forEach((job) => {
          this.majorService.getMajorCareer(job.id.toString()).subscribe({
            next: (data: MajorModel[]) => {
              if (data.length === 0) {
                return;
              }
              const jobMajorData: JobMajorModel = {
                id: job.id,
                imageUrl: job.imageUrl,
                description: job.description,
                jobName: job.jobName,
                majorList: data,
              };
              this.showedJobList.push(jobMajorData);
            },
          });
        });
      },
    });
  }

  chooseTab(event: any, index: number) {
    var tab = document.querySelector(`.tab-item:nth-child(${index})`);
    var tabActive = document.querySelector(`.tab-item.active`);
    tabActive?.classList.remove('active');
    tab?.classList.add('active');

    var infoContent = document.querySelector(
      `.info-content:nth-child(${index})`
    );
    var infoContentAcTive = document.querySelector(`.info-content.active`);
    infoContentAcTive?.classList.remove('active');
    infoContent?.classList.add('active');
  }

  getMajor(id: number) {
    this.router.navigate(['major-list/', { id: id }]);
  }

  goUniver(id: string) {
    this.router.navigate(['/school-list', { id: id }]);
  }
}
