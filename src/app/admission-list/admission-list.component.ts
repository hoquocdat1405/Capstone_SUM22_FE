import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { ActivatedRoute, Router } from '@angular/router';
import { University } from '../_model/uni';
import { UniversityService } from '../_services/university.service';
import { News } from '../_model/news.model';

@Component({
  selector: 'app-admission-list',
  templateUrl: './admission-list.component.html',
  styleUrls: ['./admission-list.component.scss'],
})
export class AdmissionListComponent implements OnInit {
  myControl = new FormControl('');
  toppings = new FormControl('');
  options: string[] = ['One', 'Two', 'Three', 'Four'];
  toppingList: string[] = ['MBTI', 'DISC', 'Big Five', 'Holland'];
  filteredOptions: Observable<string[]> | undefined;
  length = 100;
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 25, 100];
  pageEvent: PageEvent | undefined;
  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;

  newsList!: News[];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private uniSer: UniversityService
  ) {}

  ngOnInit() {
    this.getData();
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map((value) => this._filter(value || ''))
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter((option) =>
      option.toLowerCase().includes(filterValue)
    );
  }

  setPageSizeOptions(setPageSizeOptionsInput: string) {
    if (setPageSizeOptionsInput) {
      this.pageSizeOptions = setPageSizeOptionsInput
        .split(',')
        .map((str) => +str);
    }
  }

  getData() {
    this.uniSer.getAllNews().subscribe((data) => {
      this.newsList = data;
      this.newsList.forEach((news) => {
        news.createDate = new Date(news.createDate);
      });
    });
  }

  redirectToDetail(id:number) {
    this.router.navigate(['news-detail',{id:id}]);
  }
}
