import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UniversityService } from '../_services/university.service';
import { Fqa } from '../_model/fqa.model';

@Component({
  selector: 'app-FQA-page',
  templateUrl: './FQA-page.component.html',
  styleUrls: ['./FQA-page.component.scss'],
})
export class FQAPageComponent implements OnInit {
  contentId?: string = '';
  fqa?: Fqa;

  constructor(
    private route: ActivatedRoute,
    private uniService: UniversityService,
    private router: Router
  ) {}

  ngOnInit() {
    this.contentId = this.route.snapshot.paramMap.get('id')!;
    this.uniService.getFqaById(+this.contentId).subscribe({
      next: (data: Fqa) => {
        this.fqa = data;
        console.log(this.fqa);
      },
    });
  }
}
