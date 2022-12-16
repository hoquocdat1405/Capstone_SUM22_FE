import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { relative } from 'path';
import { Fqa } from 'src/app/_model/fqa.model';
import { UniversityService } from 'src/app/_services/university.service';

@Component({
  selector: 'app-content-menu',
  templateUrl: './content-menu.component.html',
  styleUrls: ['./content-menu.component.css'],
})
export class ContentMenuComponent implements OnInit {
  @Input() header!: string;
  @Input() contents!: Fqa[];

  constructor(
    private route: ActivatedRoute,
    private uniService: UniversityService,
    private router: Router
  ) {}

  ngOnInit() {}

  redirectToFQA(contentId: number) {
    this.router.navigate(['FQA', { id: contentId }]);
  }
}
