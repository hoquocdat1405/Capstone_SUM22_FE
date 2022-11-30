import { Title } from '@angular/platform-browser';
import { University } from './../_model/uni';
import { MajorService } from './../_services/major.service';
import { MajorModel } from './../_model/major/major-model';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-major-list',
  templateUrl: './major-list.component.html',
  styleUrls: ['./major-list.component.scss'],
})
export class MajorListComponent implements OnInit {
  majors?: MajorModel[];

  id?: string;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private majorSer: MajorService,
    private title: Title
  ) {}

  ngOnInit() {
    this.title.setTitle('Danh sách ngành học');

    this.id = this.route.snapshot.paramMap.get('id')!;
    this.majorSer.getMajorCareer(this.id).subscribe((data) => {
      console.log(data);
      this.majors = data;
    });
  }

  goUniver(id: string) {
    this.router.navigate(['/school-list', { id: id }]);
  }
}
