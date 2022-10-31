import { ActivatedRoute } from '@angular/router';
import { ApplicationDetailModel } from '../../_model/application/application';
import { ApplicationService } from '../../_services/application.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-apply-detail',
  templateUrl: './apply-detail.component.html',
  styleUrls: ['./apply-detail.component.scss'],
})
export class ApplyDetailComponent implements OnInit {
  appDetail?: ApplicationDetailModel;
  constructor(
    private appService: ApplicationService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    var id = this.route.snapshot.paramMap.get('id')!;
    this.appService.getApplicationDetail(id).subscribe((data) => {
      console.log(data);
      this.appDetail = data;
    });
  }
}
