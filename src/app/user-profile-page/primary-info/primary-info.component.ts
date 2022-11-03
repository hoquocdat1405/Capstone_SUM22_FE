import { ProfileService } from './../../_services/profile.service';
import { User, UserProfile, ProfileUpdateModel } from './../../_model/User';
import { AuthService } from './../../_services/auth.service';
import { Component, OnInit } from '@angular/core';
import * as alertify from 'alertifyjs';
@Component({
  selector: 'app-primary-info',
  templateUrl: './primary-info.component.html',
  styleUrls: ['./primary-info.component.scss'],
})
export class PrimaryInfoComponent implements OnInit {
  userProfile?: UserProfile;
  user?: any;
  userUpdateProfile: ProfileUpdateModel = {
    userName: '',
    gender: '',
    dateOfBirth: '',
    age: 0,
    phone: '',
    credentialId: '', //CMND
    avatarUrl: '',
    addressNumber: '', //
    credentialFrontImgUrl: '', //chua co
    credentialBackImgUrl: '', //chua co
  };

  constructor(
    private profileServ: ProfileService,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.user = this.authService.getDecodedToken();
    this.getData(this.user.nameid);
    alertify.set('notifier', 'position', 'top-center');
    alertify.set('notifier', 'delay', '3');
  }

  getData(id: string) {
    this.profileServ.getProfileInfo(id).subscribe((data) => {
      this.userProfile = data;
    });
  }

  updateProfile() {
    this.getDataUpdate();
  }

  getDataUpdate() {
    var userName = document.querySelector('.input-name') as HTMLInputElement;
    var gender = document.querySelector('.input-gender') as HTMLSelectElement;
    var dateOfBirth = document.querySelector('.input-birth') as any;
    var phone = document.querySelector('.input-phone') as HTMLInputElement;
    var addressNumber = document.querySelector(
      '.input-address'
    ) as HTMLInputElement;
    var credentialId = document.querySelector(
      '.input-credentialId'
    ) as HTMLInputElement;
    var age = this.getAge(dateOfBirth.value);

    this.userUpdateProfile!.userName = userName.value;
    this.userUpdateProfile!.gender = gender.value;
    this.userUpdateProfile!.dateOfBirth = dateOfBirth.value;
    this.userUpdateProfile!.age = age;
    this.userUpdateProfile!.phone = phone.value;
    this.userUpdateProfile!.credentialId = credentialId.value;
    this.userUpdateProfile!.avatarUrl = '';
    this.userUpdateProfile!.addressNumber = addressNumber.value;
    this.userUpdateProfile!.credentialFrontImgUrl = '';
    this.userUpdateProfile!.credentialBackImgUrl = '';
    this.profileServ.updateProfile(this.userUpdateProfile).subscribe({
      next: () => {
        alertify.success('Cập nhật thành công');
      },
      error: () => {
        alertify.error('Cập nhật thất bại');
      },
    });
  }

  getAge(dateString: any) {
    var today = new Date();
    var birthDate = new Date(dateString);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  }
}
