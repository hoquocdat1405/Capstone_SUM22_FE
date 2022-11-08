import { Profile } from './../../_model/User';
import { ProfileService } from './../../_services/profile.service';
import { AuthService } from './../../_services/auth.service';
import { User } from 'src/app/_model/User';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-sidebar',
  templateUrl: './profile-sidebar.component.html',
  styleUrls: ['./profile-sidebar.component.scss'],
})
export class ProfileSidebarComponent implements OnInit {
  hamburgerFlag: boolean = false;
  opened: boolean = true;
  user?: any;
  userProfile?: Profile;

  @Input()
  checkActive = 0;

  constructor(
    private authSer: AuthService,
    private profileServ: ProfileService
  ) {}
  currentRoutes = [
    {
      routerLink: 'primary',
      title: 'Thông tin cơ bản',
      icon: 'fa fa-info',
    },
    {
      routerLink: 'education',
      title: 'Hồ sơ học vấn',
      icon: 'fa fa-graduation-cap',
    },
    {
      routerLink: 'school-interested',
      title: 'Trường học quan tâm',
      icon: 'fa fa-heart-o',
    },
    {
      routerLink: 'apply',
      title: 'Hồ sơ đã nộp',
      icon: 'fa fa-floppy-o',
    },
  ];

  ngOnInit() {
    this.user = this.authSer.getDecodedToken();
    this.getData();
  }

  getData() {
    this.authSer.getUserProfileObserver().subscribe((data: Profile) => {
      this.userProfile = data;
    })
  }

  hamburgerClick() {
    this.hamburgerFlag = !this.hamburgerFlag;
    document.querySelector('.sidebar-container')?.classList.toggle('active');
    document.querySelector('.main-content')?.classList.toggle('active');
    document.querySelector('.nav-row .hamburger')?.classList.toggle('active');
    document.querySelectorAll('.nav-item-title')?.forEach((item) => {
      item.classList.toggle('active');
    });
  }

  activeTag(index: number) {
    this.checkActive = index;
  }
}
