import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-profile-page',
  templateUrl: './user-profile-page.component.html',
  styleUrls: ['./user-profile-page.component.scss'],
})
export class UserProfilePageComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  changeTab(event: any, index: number) {
    var activeTab = document.querySelector('.profile-item.active');
    var activeInfo = document.querySelector('.profile-info.active');
    var infos = document.querySelectorAll('.profile-info');
    var background = document.querySelector('.background-menu-open');
    var currentTag = document.querySelector(
      `.profile-item:nth-child(${index + 1})`
    );
    activeTab?.classList.remove('active');
    currentTag?.classList.add('active');
    activeInfo?.classList.remove('active');
    infos[index].classList.add('active');

    var sideBar = document.querySelector('.profile-sidebar');
    sideBar?.classList.remove('active');
    background?.classList.remove('active');
  }

  uploadImg() {
    var inputFile = document.querySelector('.img-upload') as HTMLInputElement;
    inputFile?.click();
  }

  menuClick() {
    var sideBar = document.querySelector('.profile-sidebar');
    var background = document.querySelector('.background-menu-open');

    sideBar?.classList.add('active');
    background?.classList.add('active');
  }

  closeMenu() {
    var sideBar = document.querySelector('.profile-sidebar');
    var background = document.querySelector('.background-menu-open');

    sideBar?.classList.remove('active');
    background?.classList.remove('active');
  }

  toogleClick() {
    var sideBar = document.querySelector('.profile-sidebar');
    sideBar?.classList.toggle('close');
  }
}
