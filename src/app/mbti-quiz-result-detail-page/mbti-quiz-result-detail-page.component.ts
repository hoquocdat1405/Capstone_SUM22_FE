import { MajorModel } from './../_model/major/major-model';
import { MajorService } from './../_services/major.service';
import { JobModel, JobMajorModel } from './../_model/job/job-model';
import { QuizResult } from './../_model/quiz-result';
import { SharedService } from './../_services/shared.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer, Title } from '@angular/platform-browser';
@Component({
  selector: 'app-mbti-quiz-result-detail-page',
  templateUrl: './mbti-quiz-result-detail-page.component.html',
  styleUrls: ['./mbti-quiz-result-detail-page.component.scss'],
})
export class MbtiQuizResultDetailPageComponent implements OnInit {
  id?: string | null;
  shortName?: string;
  quizResult?: QuizResult;
  job?: JobModel[];
  imageSrc: any;
  panelOpenState: boolean = false;
  showedJobList: JobMajorModel[] = [];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private sharedServ: SharedService,
    private sanitizer: DomSanitizer,
    private title: Title,
    private majorService: MajorService
  ) {}

  ngOnInit() {
    this.title.setTitle('Kết quả MBTI');
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
        console.log(this.quizResult);
      });
  }

  getJob() {
    this.sharedServ.getJobCareer(this.quizResult!.id).subscribe({
      next: (data) => {
        this.job = data;
        this.job?.forEach(job => {
          this.majorService.getMajorCareer(job.id.toString()).subscribe({
            next: (data: MajorModel[]) => {
              const jobMajorData: JobMajorModel = {
                id: job.id,
                imageUrl: job.imageUrl,
                description: job.description,
                jobName: job.jobName,
                majorList: data
              }
              this.showedJobList.push(jobMajorData);
            }
          })
        })
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

  retake() {
    this.router.navigate(['mbti-quiz-attempt', {id: this.id}])
  }
}
