import { AuthService } from './../../_services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-sidebar',
  templateUrl: './profile-sidebar.component.html',
  styleUrls: ['./profile-sidebar.component.scss'],
})
export class ProfileSidebarComponent implements OnInit {
  hamburgerFlag: boolean = false;
  opened: boolean = true;

  constructor(private authService: AuthService) {}
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
      title: 'Đơn đã nộp',
      icon: 'fa fa-floppy-o',
    },
  ];

  ngOnInit() {
    console.log(this.authService.getDecodedToken().role);
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
