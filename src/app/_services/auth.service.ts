import { ProfileService } from './profile.service';
import { Profile } from './../_model/User';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment.prod';
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
  private userProfile?: Profile;
  private userProfileObserver: BehaviorSubject<Profile>;

  constructor(private http: HttpClient, private profileService: ProfileService) {
    this.userProfileObserver = new BehaviorSubject<Profile>(<Profile>{})
    this.token = localStorage.getItem('token');
    this.helper = new JwtHelperService();
    if (this.token) {
      this.decodedToken = this.helper.decodeToken(this.token);
      this.getUserProfile()
    }
  }

  getUserProfileObserver(): Observable<Profile> {
    return this.userProfileObserver?.asObservable();
  }

  getUserProfile(): Profile {
    this.profileService.getProfileInfo().subscribe({
      next: (data: Profile) => {
        this.userProfile = data
        this.userProfileObserver.next(this.userProfile)
      } 
    })
    return <Profile>{};
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
