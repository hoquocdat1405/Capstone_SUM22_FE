import { MajorModel } from './../_model/major/major-model';
import { MajorService } from './../_services/major.service';
import { SharedService } from 'src/app/_services/shared.service';
import { Router, ActivatedRoute } from '@angular/router';
import { JobModel, JobMajorModel } from './../_model/job/job-model';
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
  showedJobList: JobMajorModel[] = [];
  panelOpenState: boolean = false;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private sharedServ: SharedService,
    private sanitizer: DomSanitizer,
    private title: Title,
    private majorService: MajorService
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
    // this.id = this.route.snapshot.paramMap.get('id')!;
    // this.shortName = this.route.snapshot.paramMap.get('shortName')!;
    // this.sharedServ
    //   .getTestResult(this.id, this.shortName)
    //   .subscribe((result) => {
    //     this.quizResult = result;
    //     this.getJob();
    //     this.imageSrc = this.sanitizer.bypassSecurityTrustResourceUrl(
    //       this.quizResult!.resultPictureUrl
    //     );
    //     console.log(result);
    //   });

    const postAnswer = this.route.snapshot.paramMap.get('postAnswer')!;

    this.sharedServ
      .submitTestDisc(JSON.parse(postAnswer))
      .subscribe((result) => {
        if (result !== null) {
          this.quizResult = result;
          this.getJob();
        }
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

  getMajor(id: number) {
    this.router.navigate(['major-list/', { id: id }]);
  }

  retake() {
    this.router.navigate(['disc-quiz-attempt', { id: this.id }]);
  }

  goUniver(id: string) {
    this.router.navigate(['/school-list', { id: id }]);
  }
}
