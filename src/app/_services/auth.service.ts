import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment.prod';
import { User } from '../_model/User';
import { BehaviorSubject, Observable, of } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

class Tokens {
  jwt: string = '';
  refreshToken: string = '';
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  // private currentUserSubject: BehaviorSubject<string>;
  // public currentUser: Observable<string>;
  private readonly JWT_TOKEN = 'JWT_TOKEN';
  private readonly REFRESH_TOKEN = 'REFRESH_TOKEN';
  baseUrl = environment.mockApiUrl;
  private loggedUser: string = '';

  constructor(private http: HttpClient) {
    // this.currentUserSubject = new BehaviorSubject<string>(
    //   localStorage.getItem('currentUser')!
    // );
    // this.currentUser = this.currentUserSubject.asObservable();
  }

  // public get currentUserValue() {
  //   return JSON.parse(this.currentUserSubject.value);
  // }

  // public setCurrentUserValue(userInfo: any) {
  //   localStorage.setItem('currentUser', JSON.stringify(userInfo));
  //   this.currentUserSubject.next(JSON.stringify(userInfo));
  // }

  login(email: string, password: string): Observable<any> {
    return this.http.post(this.baseUrl + '/User/login', {
      email: email, password: password
    }, {responseType: 'text'}).pipe(
      map((response:any) => {
        const token = response;
        if(token) {
          localStorage.setItem('token', token);
        }
      })
    );
  }

  private doLoginUser(email: string, tokens: Tokens) {
    this.loggedUser = email;
    this.storeTokens(tokens);
  }

  private storeTokens(tokens: any) {
    localStorage.setItem(this.JWT_TOKEN, tokens.jwt);
    localStorage.setItem(this.REFRESH_TOKEN, tokens.refreshToken);
  }

  // login(model:any){
  // return this.http.post(this.baseUrl+'/api/login',model);
  // }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    // this.currentUserSubject.next(null!);
  }
}
