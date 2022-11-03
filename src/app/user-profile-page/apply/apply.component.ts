import { ProfileService } from './../../_services/profile.service';
import { Router } from '@angular/router';
import { ApplicationModel } from './../../_model/application/application';
import { AuthService } from './../../_services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-apply',
  templateUrl: './apply.component.html',
  styleUrls: ['./apply.component.scss'],
})
export class ApplyComponent implements OnInit {
  id: string = '';
  applies?: ApplicationModel[];

  constructor(
    private profileServ: ProfileService,
    private auth: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    this.getData();
  }

  getData() {
    var user = this.auth.getDecodedToken();
    this.profileServ.getAllApply(user.nameid).subscribe((data) => {
      this.applies = data;
    });
  }

  viewDetail(id: string) {
    this.router.navigate(['profile/apply-detail', { id: id }]);
  }
}
