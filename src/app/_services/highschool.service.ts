import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { Highschool } from '../_model/highschool';

@Injectable({
  providedIn: 'root'
})
export class HighschoolService {
  baseUrl = environment.mockApiUrl;

  constructor(private http: HttpClient) { }

  getHighschool(): Observable<Highschool> {
    return this.http.get<Highschool>(this.baseUrl + "application/highschool")
  }
}
