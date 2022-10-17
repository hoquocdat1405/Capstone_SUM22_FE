import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { CloudinaryAppConst } from '../shared/constants/app-const';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  baseUrl = environment.mockApiUrl;

  constructor(private http: HttpClient) {}




//   getProfile(): Observable<User> {
//     return this.http.get<User>(`${this.baseUrl}/user/profile`);
//   }

//   updateUser(user: any): Observable<any> {
//     return this.http.put<any>(`${this.baseUrl}/user/update-user`, user);
//   }


  uploadImage(file: string): Observable<any> {
    let data = {
      file: file,
      api_key: CloudinaryAppConst.API_CLOUDINARY,
      upload_preset: CloudinaryAppConst.UPLOAD_PRESET_CLOUDINARY,
      folder: CloudinaryAppConst.FOLDER_CLOUDINARY,
    };
    return this.http.post<any>(
      `https://api.cloudinary.com/v1_1/qick/auto/upload`,
      data
    );
  }
}
