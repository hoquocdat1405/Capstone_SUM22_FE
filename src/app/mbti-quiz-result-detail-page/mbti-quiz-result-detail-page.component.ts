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
  resultArray: number[] = [];
  titleArray: string[] = [];
  characterArray: string[] = [];
  contentArray: string[] = [];

  result1: string = '';
  result2: string = '';
  result3: string = '';
  result4: string = '';

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

    this.titleArray = ['Nhóm I-E', 'Nhóm S-N', 'Nhóm T-F', 'Nhóm J-P'];
    this.contentArray = [
      'Tỷ lệ dựa trên nhóm: Hướng Nội - Hướng Ngoại',
      'Tỷ lệ dựa trên nhóm: Giác Quan - Trực Giác',
      'Tỷ lệ dựa trên nhóm: Lý Trí - Cảm xúc',
      'Tỷ lệ dựa trên nhóm: Nguyên tắc - Linh hoạt',
    ];
  }

  getData() {
    this.id = this.route.snapshot.paramMap.get('id')!;
    this.shortName = this.route.snapshot.paramMap.get('shortName')!;
    this.result1 = this.route.snapshot.paramMap.get('result1')!;
    this.result2 = this.route.snapshot.paramMap.get('result2')!;
    this.result3 = this.route.snapshot.paramMap.get('result3')!;
    this.result4 = this.route.snapshot.paramMap.get('result4')!;
    this.sharedServ
      .getTestResult(this.id, this.shortName)
      .subscribe((result) => {
        this.quizResult = result;
        this.getJob();
        this.imageSrc = this.sanitizer.bypassSecurityTrustResourceUrl(
          this.quizResult!.resultPictureUrl
        );
      });

    // Kham
    // const postAnswer = this.route.snapshot.paramMap.get('postAnswer')!;

    // this.sharedServ.submitTest(JSON.parse(postAnswer)).subscribe((result) => {
    //   if (result !== null) {
    //     this.quizResult = result;
    //     console.log(result);
    //     this.getJob();
    //     this.resultArray.push(
    //       this.quizResult?.result1
    //         .split('-')[1]
    //         .split('%')[0]! as unknown as number
    //     );
    //     this.resultArray.push(
    //       this.quizResult?.result2
    //         .split('-')[1]
    //         .split('%')[0]! as unknown as number
    //     );
    //     this.resultArray.push(
    //       this.quizResult?.result3
    //         .split('-')[1]
    //         .split('%')[0]! as unknown as number
    //     );
    //     this.resultArray.push(
    //       this.quizResult?.result4
    //         .split('-')[1]
    //         .split('%')[0]! as unknown as number
    //     );

    //     this.characterArray.push(this.quizResult?.result1.charAt(0) as string);
    //     this.characterArray.push(this.quizResult?.result2.charAt(0) as string);
    //     this.characterArray.push(this.quizResult?.result3.charAt(0) as string);
    //     this.characterArray.push(this.quizResult?.result4.charAt(0) as string);

    //   }
    // });

    this.characterArray.push(this.result1.charAt(0) as string);
    this.characterArray.push(this.result2.charAt(0) as string);
    this.characterArray.push(this.result3.charAt(0) as string);
    this.characterArray.push(this.result4.charAt(0) as string);
    this.resultArray.push(
      this.result1.split('-')[1].split('%')[0]! as unknown as number
    );
    this.resultArray.push(
      this.result2.split('-')[1].split('%')[0]! as unknown as number
    );
    this.resultArray.push(
      this.result3.split('-')[1].split('%')[0]! as unknown as number
    );
    this.resultArray.push(
      this.result4.split('-')[1].split('%')[0]! as unknown as number
    );
    console.log(this.characterArray);
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

  retake() {
    this.router.navigate(['mbti-quiz-attempt', { id: this.id }]);
  }
}
