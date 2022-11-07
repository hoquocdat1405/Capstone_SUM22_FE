import { ProfileUpdateModel } from './../_model/User';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  baseUrl = environment.mockApiUrl;
  constructor(private http: HttpClient) {}

  getProfileInfo(id: string): Observable<any> {
    return this.http.get<any>(this.baseUrl + 'user/get-profile?userId=' + id);
  }

  updateProfile(profile: ProfileUpdateModel): Observable<any> {
    return this.http.put<any>(this.baseUrl + 'user/update-user', profile);
  }

  getAllApply(): Observable<any> {
    return this.http.get<any>(
      this.baseUrl + 'application/get-all-application'
    );
  }
}
