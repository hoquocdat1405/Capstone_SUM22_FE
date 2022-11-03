import { ResProvince, ResDistrict, ResWard } from './../_model/address';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  constructor(private http: HttpClient) { }
  
  getProvince(): Observable<ResProvince> {
    return this.http.get<ResProvince>('https://vapi.vnappmob.com/api/province/');
  }

  getDistrict(provinceId: number): Observable<ResDistrict> {
    return this.http.get<ResDistrict>('https://vapi.vnappmob.com/api/province/district/' + provinceId);
  }

  getWard(districtId: string): Observable<ResWard> {
    return this.http.get<ResWard>('https://vapi.vnappmob.com/api/province/ward/' + districtId);
  }

}
