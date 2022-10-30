import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { environment } from './../../environments/environment.prod';

@Injectable({
  providedIn: 'root',
})
export class MajorService {
  baseUrl = environment.mockApiUrl;
  constructor(private http: HttpClient) {}

  getMajorCareer(id: string | null): Observable<any> {
    return this.http.get<any>(
      this.baseUrl + 'major/get-major-career?jobId=' + id
    );
  }
}
