import { Observable } from 'rxjs';
import { environment } from './../../environments/environment.prod';
import { University } from './../_model/uni';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UniversityService {
  baseUrl = environment.mockApiUrl;

  constructor(private http: HttpClient) { }

  getAllUniversity(): Observable<University[]> {
    return this.http.get<University[]>(this.baseUrl + "university/get-university");
  }

}
