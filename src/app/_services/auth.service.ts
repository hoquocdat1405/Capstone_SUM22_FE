import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment.prod';
import { UserProfile } from '../_model/User';
import { BehaviorSubject, Observable } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private baseUrl = environment.mockApiUrl;
  private helper: any;
  private decodedToken: any;
  private token: any;
  public userProfile?: BehaviorSubject<UserProfile>;

  constructor(private http: HttpClient) {
    this.token = localStorage.getItem('token');
    this.helper = new JwtHelperService();
    if (this.token) {
      this.decodedToken = this.helper.decodeToken(this.token);
      this.getUserProfile(this.decodedToken.nameid).subscribe({
        next: (data: UserProfile) => {
          this.userProfile = new BehaviorSubject<UserProfile>(data)
        }
      })
    }
  }

  login(email: string, password: string): Observable<any> {
    return this.http
      .post(
        this.baseUrl + 'auth/login',
        {
          email: email,
          password: password,
        },
        { responseType: 'text' }
      )
      .pipe(
        map((response: any) => {
          this.token = response;
          if (this.token) {
            localStorage.setItem('token', this.token);
            this.decodedToken = this.helper.decodeToken(this.token);
            localStorage.setItem('role', this.decodedToken.role);
          }
        })
      );
  }

  register(email: string, name: string, password: string): Observable<any> {
    return this.http
      .post(
        this.baseUrl + 'auth/register',
        {
          email: email,
          name: name,
          password: password,
        },
        { responseType: 'text' }
      )
      .pipe(
        map((response: any) => {
          let res = response;
          if (res.message === 'Success') {
            console.log('Register successfully');
          }
        })
      );
  }

  getUserProfile(userId: string) : Observable<UserProfile> {
    return this.http.get<UserProfile>(this.baseUrl + "user/get-profile?userId=" + userId);
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    window.location.reload();
  }

  getDecodedToken() {
    return this.decodedToken;
  }

  hasLoggedIn() {
    return !!localStorage.getItem('token');
  }
}
