import { MajorModel } from './../_model/major/major-model';
import { MajorService } from './../_services/major.service';
import { DomSanitizer, Title } from '@angular/platform-browser';
import { SharedService } from 'src/app/_services/shared.service';
import { Router, ActivatedRoute } from '@angular/router';
import {
  JobMajorModel,
  JobModel,
  CharacterJobMajor,
  MyJobModel,
  MyMajor,
} from './../_model/job/job-model';
import { QuizResult } from './../_model/quiz-result';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bf-quiz-result-detail-page',
  templateUrl: './bf-quiz-result-detail-page.component.html',
  styleUrls: ['./bf-quiz-result-detail-page.component.scss'],
})
export class BfQuizResultDetailPageComponent implements OnInit {
  quizResult?: QuizResult;
  showedJobList: JobMajorModel[] = [];
  id: string = '';
  panelOpenState: boolean = false;
  myCharacterList: CharacterJobMajor[] = [];
  testId: string = '';
  resultArray: number[] = [];
  titleArray: string[] = [];
  characterArray: string[] = [];
  contentArray: string[] = [];

  result1: string = '';
  result2: string = '';
  result3: string = '';
  result4: string = '';
  result5: string = '';

  public mbtiType: { name: string; shorthand: string; imgSrc: string };

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private sharedServ: SharedService,
    private sanitizer: DomSanitizer,
    private title: Title,
    private majorService: MajorService
  ) {
    this.mbtiType = {
      name: 'Người che chở',
      shorthand: 'INFJ',
      imgSrc: '../../assets/svg/mbti-types/mbti-type-infj.svg',
    };
  }

  ngOnInit(): void {
    this.title.setTitle('Kết quả Big Five');
    this.getData();

    this.titleArray = [
      'Cởi mở',
      'Nhạy cảm',
      'Dễ chịu',
      'Hướng ngoại',
      'Tận tâm',
    ];
  }

  getData() {
    // const postAnswer = this.route.snapshot.paramMap.get('postAnswer')!;

    // this.sharedServ
    //   .submitTestBigFive(JSON.parse(postAnswer))
    //   .subscribe((result) => {
    //     if (result !== null) {
    //       this.quizResult = result;
    //       this.resultArray.push(
    //         this.quizResult?.result1
    //           .split('-')[1]
    //           .split('%')[0]! as unknown as number
    //       );
    //       this.resultArray.push(
    //         this.quizResult?.result2
    //           .split('-')[1]
    //           .split('%')[0]! as unknown as number
    //       );
    //       this.resultArray.push(
    //         this.quizResult?.result3
    //           .split('-')[1]
    //           .split('%')[0]! as unknown as number
    //       );
    //       this.resultArray.push(
    //         this.quizResult?.result4
    //           .split('-')[1]
    //           .split('%')[0]! as unknown as number
    //       );
    //       this.resultArray.push(
    //         this.quizResult?.result5
    //           .split('-')[1]
    //           .split('%')[0]! as unknown as number
    //       );
    //     }
    //   });

    // console.log(this.resultArray);

    // this.testId = JSON.parse(postAnswer).testId;
    // this.getCharacter();

    this.id = this.route.snapshot.paramMap.get('id')!;
    this.result1 = this.route.snapshot.paramMap.get('result1')!;
    this.result2 = this.route.snapshot.paramMap.get('result2')!;
    this.result3 = this.route.snapshot.paramMap.get('result3')!;
    this.result4 = this.route.snapshot.paramMap.get('result4')!;
    this.result5 = this.route.snapshot.paramMap.get('result5')!;
    this.sharedServ.getTestResult(this.id, '').subscribe((result) => {
      this.quizResult = result;
      console.log(this.quizResult);
      // this.imageSrc = this.sanitizer.bypassSecurityTrustResourceUrl(
      //   this.quizResult!.resultPictureUrl
      // );
    });

    this.characterArray.push(this.result1.charAt(0) as string);
    this.characterArray.push(this.result2.charAt(0) as string);
    this.characterArray.push(this.result3.charAt(0) as string);
    this.characterArray.push(this.result4.charAt(0) as string);
    this.characterArray.push(this.result5.charAt(0) as string);
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
    this.resultArray.push(
      this.result5.split('-')[1].split('%')[0]! as unknown as number
    );

    this.getCharacter();
  }

  // getJob() {
  //   this.sharedServ.getJobCareer(this.quizResult!.id).subscribe({
  //     next: (data) => {
  //       this.job = data;
  //       this.job?.forEach((job) => {
  //         this.majorService.getMajorCareer(job.id.toString()).subscribe({
  //           next: (data: MajorModel[]) => {
  //             if (data.length === 0) {
  //               return;
  //             }
  //             const jobMajorData: JobMajorModel = {
  //               id: job.id,
  //               imageUrl: job.imageUrl,
  //               description: job.description,
  //               jobName: job.jobName,
  //               majorList: data,
  //             };
  //             this.showedJobList.push(jobMajorData);
  //           },
  //         });
  //       });
  //     },
  //   });
  // }

  getCharacter() {
    this.sharedServ.getTestResult(this.id, '').subscribe((response) => {
      this.myCharacterList = response;
      console.log(this.myCharacterList);
    });
  }

  getMajor(id: number) {
    this.router.navigate(['major-list/', { id: id }]);
  }

  retake() {
    this.router.navigate(['big-five-quiz-attempt', { id: this.id }]);
  }

  goUniver(id: string) {
    this.router.navigate(['/school-list', { id: id }]);
  }
}
