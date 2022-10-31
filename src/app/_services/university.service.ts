import { Observable } from 'rxjs';
import { environment } from './../../environments/environment.prod';
import { University, UniSpec } from './../_model/uni';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UniversityService {
  baseUrl = environment.mockApiUrl;

  constructor(private http: HttpClient) {}

  getAllUniversity(): Observable<University[]> {
    return this.http.get<University[]>(
      this.baseUrl + 'university/get-university'
    );
  }

  getUniversityByMajor(id: string): Observable<University[]> {
    return this.http.get<University[]>(
      this.baseUrl + 'university/get-uni-major?majorId=' + id
    );
  }

  getUniSpecById(schoolId: String): Observable<UniSpec[]> {
    return this.http.get<UniSpec[]>(this.baseUrl + "university/get-university-spec?UniId=" + schoolId)
  }
  // createApplication()
}
