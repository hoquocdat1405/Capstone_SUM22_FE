import { ProfileUpdateModel } from './../_model/User';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map } from 'rxjs/operators';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { CloudinaryAppConst } from '../shared/constants/app-const';
@Injectable({
  providedIn: 'root',
})
export class SharedService {
  baseUrl = environment.mockApiUrl;

  constructor(private http: HttpClient) {}

  getAllTest(): Observable<any> {
    return this.http.get<any>(this.baseUrl + 'test/get-active-test');
  }

  getTestDetail(id: any): Observable<any> {
    return this.http.get<any>(
      this.baseUrl + 'test/get-test-detail?testId=' + id
    );
  }

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

  takingTestGuest(index: number): Observable<any> {
    return this.http.get<any>(
      this.baseUrl + 'test/taking-test?testId=' + index
    );
  }

  getTestResult(id: string | null, shortName: string): Observable<any> {
    return this.http.get<any>(
      this.baseUrl +
        'Character/get-character?testId=' +
        id +
        '&resultShortName=' +
        shortName
    );
  }

  submitTest(data: any): Observable<any> {
    return this.http.post<any>(this.baseUrl + 'test/submit-test', data);
  }

  submitTestDisc(data: any): Observable<any> {
    return this.http.post<any>(this.baseUrl + 'test/disc', data);
  }

  getJobCareer(id: string | null): Observable<any> {
    return this.http.get<any>(
      this.baseUrl + 'job/get-job-career?CharacterId=' + id
    );
  }
}
