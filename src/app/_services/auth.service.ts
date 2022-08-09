import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { User } from '../_model/User';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  baseUrl = `${environment.mockApiUrl}`;

  // login(model: any) {
  //   return this.http.post(this.baseUrl + '/api/login', model).pipe(
  //     map((response: any) => {
  //       const user:User = response;
  //       if (user) {
  //         localStorage.setItem('username', user.name);
  //       }
  //     })
  //   );
  // }

  login(model:any){
    return this.http.post(this.baseUrl+'/api/login',model);
  }
}
