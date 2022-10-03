import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment.prod';
import { User } from '../_model/User';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) { }


  baseUrl = `${environment.mockApiUrl}`;

  login(email: string,password:string): Observable<any> {
    // return this.http.post(this.baseUrl + 'User/login', model).pipe(
    //   map((response: any) => {
    //     const user: User = response;
    //     if (user) {
    //       localStorage.setItem('email', user.name);
    //     }
    //   })
    // );
    return this.http.post(this.baseUrl + 'User/login', {
      email,password
    }, httpOptions);
  }

  // login(model:any){
  // return this.http.post(this.baseUrl+'/api/login',model);
  // }
}
