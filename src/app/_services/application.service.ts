import { Application, ApplicationDetail } from './../_model/application/application';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApplicationService {
  baseUrl = environment.mockApiUrl;

  constructor(private http: HttpClient) { }

  createApplication(application: Application): Observable<any> {
    return this.http.post<any>(
      this.baseUrl + 'application/create-application', application
    );
  }

  createApplicationDetail(application: ApplicationDetail): Observable<any> {
    return this.http.post<any>(
      this.baseUrl + 'application/create-application-detail', application
    );
  }
}
