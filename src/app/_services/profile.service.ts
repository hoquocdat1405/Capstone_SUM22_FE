import { ApplicationModel } from './../_model/application/application';
import {
  ProfileUpdateModel,
  Profile,
  AcaProfile,
  UpdateAca,
} from './../_model/User';
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

  getProfileInfo(): Observable<Profile> {
    return this.http.get<Profile>(this.baseUrl + 'user/get-profile');
  }

  updateProfile(profile: ProfileUpdateModel): Observable<any> {
    return this.http.put<any>(this.baseUrl + 'user/update-user', profile);
  }

  getAllApply(): Observable<ApplicationModel[]> {
    return this.http.get<ApplicationModel[]>(
      this.baseUrl + 'application/get-all-application'
    );
  }

  getAcaProfile(): Observable<AcaProfile> {
    return this.http.get<AcaProfile>(this.baseUrl + 'user/get-aca-profile');
  }

  updateAcaProfile(updateAca: UpdateAca): Observable<any> {
    return this.http.put<any>(this.baseUrl + 'user/update-aca', updateAca);
  }

  getTestAttempt(): Observable<any> {
    return this.http.get<any>(this.baseUrl + 'user/attempts');
  }
}
