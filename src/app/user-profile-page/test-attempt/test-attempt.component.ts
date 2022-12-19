import { TestResult } from './../../_model/quiz-attempt-model';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ProfileService } from './../../_services/profile.service';
import { Router } from '@angular/router';
import { ApplicationModel } from './../../_model/application/application';
import { AuthService } from './../../_services/auth.service';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-test-attempt',
  templateUrl: './test-attempt.component.html',
  styleUrls: ['./test-attempt.component.scss'],
})
export class TestAttemptComponent implements OnInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  // id: string = '';
  displayedColumns: string[] = [
    'index',
    'nameTest',
    'result',
    'date',
    'detail',
  ];
  dataSource: MatTableDataSource<TestResult>;
  testResult: TestResult[] = [];

  constructor(
    private profileServ: ProfileService,
    private auth: AuthService,
    private router: Router
  ) {
    this.dataSource = new MatTableDataSource();
  }

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.profileServ.getTestAttempt().subscribe((data: TestResult[]) => {
      this.testResult = data;
      this.dataSource = new MatTableDataSource(this.testResult);
      this.dataSource.paginator = this.paginator;
    });
  }

  // viewDetail(id: string, resultShortName: string, category: string) {
  //   this.router.navigate([
  //     category.toLowerCase() + '-result/',
  //     { id: id, shortName: resultShortName },
  //   ]);
  // }

  viewDetail(id: number) {
    const y = this.testResult.find(x => x.id === id);
    if (y) {
      if (y.testName === "Big Five") {
        this.router.navigate([
          'bf-result/',
          {
            id: y.testId,
            shortName: y.resultShortName,
            result1: y.result1,
            result2: y.result2,
            result3: y.result3,
            result4: y.result4,
            result5: y.result5,
            result6: y.result6,
          },
        ]);
      } else {
        this.router.navigate([
          y.testName.toLowerCase() + '-result/',
          {
            id: y.testId,
            shortName: y.resultShortName,
            result1: y.result1,
            result2: y.result2,
            result3: y.result3,
            result4: y.result4,
            result5: y.result5,
            result6: y.result6,
          },
        ]);
      }
    }
  }

  applyFilter(filterValue: any) {
    this.dataSource.filter = filterValue.target.value.trim().toLowerCase();
  }
}
