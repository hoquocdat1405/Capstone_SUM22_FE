import { Province, District, Ward } from './../_model/address';
import { environment } from './../../environments/environment.prod';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AddressService {
  baseUrl: string = environment.mockApiUrl;

  constructor(private http: HttpClient) { }
  
  getProvince(): Observable<Province[]> {
    return this.http.get<Province[]>(this.baseUrl + 'address/province');
  }

  getDistrict(provinceId: number): Observable<District[]> {
    return this.http.get<District[]>(this.baseUrl + 'address/district?ProvinceId=' + provinceId);
  }

  getWard(districtId: string): Observable<Ward[]> {
    return this.http.get<Ward[]>(this.baseUrl + 'address/ward?DistrictId=' + districtId);
  }

}
