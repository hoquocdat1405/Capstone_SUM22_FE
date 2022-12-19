import { FileuploadService } from './../../_services/fileupload.service';
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
  avatarUrl?: string;

  @Input()
  checkActive = 0;

  constructor(
    private authSer: AuthService,
    private profileServ: ProfileService,
    private uploadService: FileuploadService
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
      title: 'Hồ sơ đã gửi',
      icon: 'fa fa-floppy-o',
    },
    {
      routerLink: 'test-attempt',
      title: 'Bài test đã làm',
      icon: 'fa fa-check-square-o',
    },
  ];

  ngOnInit() {
    this.user = this.authSer.getDecodedToken();
    this.getData();

    setTimeout(() => {
      document
        .querySelector(`mat-list-item:nth-child(1)`)
        ?.classList.add('active');
    }, 2);
    this.uploadService
      .getFile(this.authSer.getDecodedToken().nameid, 'avatar')
      .subscribe({
        next: (data) => {
          this.avatarUrl = data;
        },
      });
  }

  getData() {
    this.authSer.getUserProfileObserver().subscribe((data: Profile) => {
      this.userProfile = data;
    });
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

    document.querySelectorAll(`mat-list-item.active`)?.forEach((item) => {
      item.classList.remove('active');
    });
    document
      .querySelector(`mat-list-item:nth-child(${index + 1})`)
      ?.classList.add('active');
  }
}
