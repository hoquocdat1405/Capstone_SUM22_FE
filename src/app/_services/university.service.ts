import { Observable } from 'rxjs';
import { environment } from './../../environments/environment.prod';
import { University, UniSpec, UniDetail } from './../_model/uni';
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
    return this.http.get<UniSpec[]>(
      this.baseUrl + 'university/get-university-spec?UniId=' + schoolId
    );
  }

  getUniById(id: string): Observable<UniDetail> {
    return this.http.get<UniDetail>(
      this.baseUrl + 'university/get-university?UniId=' + id
    );
  }

  saveUni(id: string): Observable<any> {
    return this.http.post<any>(this.baseUrl + 'user/save-uni', { uniId: id });
  }

  getInterestedUni(): Observable<any> {
    return this.http.get<any>(this.baseUrl + 'user/save-unis');
  }

  getFqaUni(id: string): Observable<any> {
    return this.http.get<any>(
      this.baseUrl + 'university/fqas?UniId=' + id + '&status=ACTIVE'
    );
  }

  getFqaById(id: number): Observable<any> {
    return this.http.get<any>(this.baseUrl + 'university/fqa?contentId=' + id);
  }

  getAllNews(): Observable<any> {
    return this.http.get<any>(this.baseUrl + 'university/news');
  }

  getNewsById(id: string): Observable<any> {
    return this.http.get<any>(
      this.baseUrl + 'university/news-by-id?NewsId=' + id
    );
  }
}
