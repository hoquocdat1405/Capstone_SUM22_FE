import { Test } from './../_model/test.model';
import { MajorModel } from './../_model/major/major-model';
import { MajorService } from './../_services/major.service';
import { SharedService } from './../_services/shared.service';
import { Router, ActivatedRoute } from '@angular/router';
import { JobModel, JobMajorModel, CharacterJobMajor, MyJobModel, MyMajor } from './../_model/job/job-model';
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
  job: JobModel[] = [];
  imageSrc: any;
  result?: { labels: string[]; values: number[] };
  showedJobList: JobMajorModel[] = [];
  panelOpenState: boolean = false;
  test?: Test;
  testId: string = '';
  characters: QuizResult[] = [];

  myCharacterList: CharacterJobMajor[] = []

  listJobCareer: (JobModel[])[] = [];

  listValue: string[] = [];

  result1: string = '';
  result2: string = '';
  result3: string = '';
  result4: string = '';
  result5: string = '';
  result6: string = '';

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private sharedServ: SharedService,
    private title: Title,
    private majorService: MajorService
  ) {
  }

  ngOnInit() {
    this.title.setTitle('Kết quả Holland');
    this.getData();
    
    this.result1 = this.route.snapshot.paramMap.get('result1')!;
    this.result2 = this.route.snapshot.paramMap.get('result2')!;
    this.result3 = this.route.snapshot.paramMap.get('result3')!;
    this.result4 = this.route.snapshot.paramMap.get('result4')!;
    this.result5 = this.route.snapshot.paramMap.get('result5')!;
    this.result6 = this.route.snapshot.paramMap.get('result6')!;

    this.listValue.push(this.result1.split('-')[1].split('%')[0]!)
    this.listValue.push(this.result2.split('-')[1].split('%')[0]!)
    this.listValue.push(this.result3.split('-')[1].split('%')[0]!)
    this.listValue.push(this.result4.split('-')[1].split('%')[0]!)
    this.listValue.push(this.result5.split('-')[1].split('%')[0]!)
    this.listValue.push(this.result6.split('-')[1].split('%')[0]!)
    this.result = {
      labels: [
        'Kỹ thuật',
        'Nghiên cứu',
        'Nghệ thuật',
        'Xã hội',
        'Quản lí',
        'Nghiệp vụ',
      ],
      values: [+this.listValue[0], +this.listValue[1], +this.listValue[2], +this.listValue[3], +this.listValue[4], +this.listValue[5]]
    }
    // this.getCharacter();
  }

  getData() {
    // this.sharedServ
    //   .submitTestHolland(JSON.parse(postAnswer))
    //   .subscribe((result) => {
    //     if (result !== null) {
    //       this.quizResult = result;
    //       this.listValue.push(this.quizResult?.result1.split('-')[1].split('%')[0]!)
    //       this.listValue.push(this.quizResult?.result2.split('-')[1].split('%')[0]!)
    //       this.listValue.push(this.quizResult?.result3.split('-')[1].split('%')[0]!)
    //       this.listValue.push(this.quizResult?.result4.split('-')[1].split('%')[0]!)
    //       this.listValue.push(this.quizResult?.result5.split('-')[1].split('%')[0]!)
    //       this.listValue.push(this.quizResult?.result6.split('-')[1].split('%')[0]!)
    //       this.result = {
    //         labels: [
    //           'Kỹ thuật',
    //           'Nghiên cứu',
    //           'Nghệ thuật',
    //           'Xã hội',
    //           'Quản lí',
    //           'Nghiệp vụ',
    //         ],
    //         values: [+this.listValue[0], +this.listValue[1], +this.listValue[2], +this.listValue[3], +this.listValue[4], +this.listValue[5]],
    //       };
    //     }
    //   });
    this.getCharacter();
  }

  getCharacter() {
    this.testId = this.route.snapshot.paramMap.get('id')!;
    this.sharedServ.getTestResult(this.testId, '').subscribe((response) => {
      this.myCharacterList = response;
      this.myCharacterList.forEach(char => {
        this.sharedServ.getJobCareer(char.id).subscribe({
          next: (data: MyJobModel[]) => {
            char.jobs = data;
            char.jobs.forEach(job => {
              this.majorService.getMajorCareer(job.id.toString()).subscribe({
                next: (dataMajor: MyMajor[]) => {
                  if (dataMajor.length === 0) {
                    char.jobs.splice(char.jobs.indexOf(char.jobs.find(o => o.id === job.id)!), 1);
                  }
                  job.majors = dataMajor;
                }
              })
            })
          },
        });
      })
    });
  }

  retake() {
    this.router.navigate(['holland-quiz-attempt', { id: this.testId }])
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
