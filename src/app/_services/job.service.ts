import { Job } from './../_model/job';
import { Observable } from 'rxjs';
import { environment } from './../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class JobService {
  baseUrl = environment.mockApiUrl;

  constructor(private http: HttpClient) {}

  getAllJob(): Observable<Job[]> {
    return this.http.get<Job[]>(this.baseUrl + 'job/get-job');
  }

  getJobFiltered(): Observable<Job[]> {
    return this.http.get<Job[]>(this.baseUrl + "job/filter");
  }
}
