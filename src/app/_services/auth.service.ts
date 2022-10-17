import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment.prod';
import { User } from '../_model/User';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { JwtHelperService } from "@auth0/angular-jwt";

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
  private baseUrl = environment.mockApiUrl;
  private helper: any;
  private decodedToken: any;
  private token: any;

  constructor(private http: HttpClient) {
    this.token = localStorage.getItem('token')
    this.helper = new JwtHelperService();
    if(this.token) {
      this.decodedToken = this.helper.decodeToken(this.token)
    }
  }

  login(email: string, password: string): Observable<any> {
    return this.http.post(this.baseUrl + 'user/login', {
      email: email, password: password
    }, { responseType: 'text' }).pipe(
      map((response: any) => {
        this.token = response;
        if (this.token) {
          localStorage.setItem('token', this.token);
          this.decodedToken = this.helper.decodeToken(this.token)
          localStorage.setItem('role', this.decodedToken.role)
        }
      })
    );
  }

  register(email:string, name:string, password:string) : Observable<any> {
    return this.http.post(this.baseUrl + 'user/register', {
      email: email, name:name, password: password
    }, {responseType: 'text'}).pipe(
      map((response:any) => {
        let res = response;
        if(res.message === "Success") {
          console.log("Register successfully");
        }
      })
    )
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
  }

  getDecodedToken() {
    return this.decodedToken;
  }
}
