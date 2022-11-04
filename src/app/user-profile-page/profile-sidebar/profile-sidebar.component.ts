import { AuthService } from './../../_services/auth.service';
import { User } from 'src/app/_model/User';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-sidebar',
  templateUrl: './profile-sidebar.component.html',
  styleUrls: ['./profile-sidebar.component.scss'],
})
export class ProfileSidebarComponent implements OnInit {
  hamburgerFlag: boolean = false;
  opened: boolean = true;
  user?: User;

  constructor(private authSer: AuthService) {}
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
    console.log(this.user);
  }

  hamburgerClick() {
    this.hamburgerFlag = !this.hamburgerFlag;
    console.log(this.hamburgerFlag);
    document.querySelector('.sidebar-container')?.classList.toggle('active');
    document.querySelector('.main-content')?.classList.toggle('active');
    document.querySelector('.nav-row .hamburger')?.classList.toggle('active');
    document.querySelectorAll('.nav-item-title')?.forEach((item) => {
      item.classList.toggle('active');
    });
  }
}
