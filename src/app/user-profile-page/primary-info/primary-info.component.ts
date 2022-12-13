import { FileuploadService } from './../../_services/fileupload.service';
import { Province, District, Ward } from './../../_model/address';
import { AddressService } from './../../_services/address.service';
import { ProfileService } from './../../_services/profile.service';
import { ProfileUpdateModel, Profile } from './../../_model/User';
import { AuthService } from './../../_services/auth.service';
import { Component, OnInit } from '@angular/core';
import * as alertify from 'alertifyjs';
import { FileUpload } from 'src/app/_model/file';
@Component({
  selector: 'app-primary-info',
  templateUrl: './primary-info.component.html',
  styleUrls: ['./primary-info.component.scss'],
})
export class PrimaryInfoComponent implements OnInit {
  userProfile?: Profile;
  isChecked: boolean = false;
  user?: any;
  listProvince: Province[] = [];
  listDistrict: District[] = [];
  listWard: Ward[] = [];
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
    wardId: 0,
  };
  selectedProvince?: number;
  selectedDistrict?: number;
  selectedWard?: number;

  avatarUrl?: string;
  avatarFile?: File;
  // avatarName?: string;

  constructor(
    private profileServ: ProfileService,
    private authService: AuthService,
    private addressService: AddressService,
    private uploadService: FileuploadService
  ) {}

  ngOnInit() {
    this.user = this.authService.getDecodedToken();
    this.getData();
    alertify.set('notifier', 'position', 'top-center');
    alertify.set('notifier', 'delay', '3');

    this.addressService.getProvince().subscribe({
      next: (data: Province[]) => {
        this.listProvince = data;
      },
    });

    this.getAvatar();
  }

  getAvatar() {
    this.uploadService.getFile(this.authService.getDecodedToken().nameid, 'avatar').subscribe({
      next: (data) => {
        this.avatarUrl = data;
      }
    })
  }

  getData() {
    // this.authService.getUserProfileObserver().subscribe((data: Profile) => {
    // })

    this.profileServ.getProfileInfo().subscribe({
      next: (data: Profile) => {
        this.userProfile = data;
        this.selectedProvince = this.userProfile.provinceId;
        this.getListDistrict(this.userProfile.provinceId);
        this.selectedDistrict = this.userProfile.districtId;
        this.getListWard(this.userProfile.districtId + '');
        this.selectedWard = this.userProfile.wardId;
        this.isChecked = this.userProfile.publicProfile === 'ACTIVE';
      },
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
    var provinceId = document.getElementById('province') as HTMLSelectElement;
    var wardId = document.getElementById('ward') as HTMLSelectElement;
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
    this.userUpdateProfile!.wardId = +wardId.value;
    this.profileServ.updateProfile(this.userUpdateProfile).subscribe({
      next: () => {
        if(this.avatarFile) {
          this.uploadService.pushFileToStorage(this.authService.getDecodedToken().nameid, 'avatar', new FileUpload(this.avatarFile)).subscribe({
            next: (data) => {
              if(data === 100) {
                alertify.success('Cập nhật thành công');
              }
            }
          })
        }
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

  uploadAvatar() {
    var imgUpload = document.querySelector('.img-upload') as HTMLInputElement;
    imgUpload.click();
  }
  provinceChange() {
    this.getListDistrict(this.selectedProvince!);
  }

  getListDistrict(id: number) {
    this.addressService.getDistrict(id).subscribe({
      next: (data: District[]) => {
        this.listDistrict = data;
      },
    });
  }

  getListWard(id: string) {
    this.addressService.getWard(id).subscribe({
      next: (data: Ward[]) => {
        this.listWard = data;
      },
    });
  }

  districtChange() {
    this.getListWard(this.selectedDistrict + '');
  }

  receiveInfo() {
    this.authService.publicProfile().subscribe({
      next: () => {
        alertify.success('Thành công');
      },
      error: () => alertify.error('Có lỗi xảy ra'),
    });
  }

  avatarChange(event: any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      if (!file.type.includes("image")) {
        alertify.error("Vui lòng chọn hình ảnh");
        return;
      }
      const reader = new FileReader();
      const selectedFrontIdFile: FileList = event.target.files;
      if (selectedFrontIdFile) {
        // this.avatarName = selectedFrontIdFile.item(0)!.name;
        reader.onload = e => this.avatarUrl = reader.result + "";
        reader.readAsDataURL(event.target.files[0]);
        this.avatarFile = selectedFrontIdFile[0]
      }
      // const frontId: SubmitApplications = {
      //   name: 'app_frontId',
      //   submittedFile: file,
      // };

      // const index = this.submitFiles.findIndex(
      //   (item) => item.name === frontId.name
      // );
      // if (index !== -1) {
      //   this.submitFiles[index].submittedFile = file;
      // } else {
      //   this.submitFiles.push(frontId);
      // }
      // console.log(this.submitFiles)
    }
  }
}
