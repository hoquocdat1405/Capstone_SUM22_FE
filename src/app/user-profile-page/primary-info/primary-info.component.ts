import { User } from './../../_model/User';
import { AuthService } from './../../_services/auth.service';
import { SharedService } from './../../_services/shared.service';
import { ProfileModel, ProfileUpdateModel } from './../../_model/profile';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-primary-info',
  templateUrl: './primary-info.component.html',
  styleUrls: ['./primary-info.component.scss'],
})
export class PrimaryInfoComponent implements OnInit {
  userProfile?: ProfileModel;
  user?: any;
  userUpdateProfile: ProfileUpdateModel = {
    id: '',
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
    private sharedServ: SharedService,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.user = this.authService.getDecodedToken();
    this.getData(this.user.nameid);
  }

  getData(id: string) {
    this.sharedServ.getProfileInfo(id).subscribe((data) => {
      this.userProfile = data;
    });
  }

  updateProfile() {
    this.sharedServ
      .updateProfile(this.userUpdateProfile)
      .subscribe((result) => {
        console.log(result);
      });

    this.getDataUpdate();
  }

  getDataUpdate() {
    console.log(this.user);
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

    this.userUpdateProfile!.id = this.user.nameid;
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

    console.log(this.userUpdateProfile);
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
