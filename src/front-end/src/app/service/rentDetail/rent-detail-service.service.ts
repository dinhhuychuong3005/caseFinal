import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {RentDetail} from '../../models/rent/rent-detail';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RentDetailServiceService {
API = environment.API_URL +'/rentDetail'
  constructor(private http: HttpClient) { }
  getByRentId(id : number): Observable<RentDetail[]> {
  return this.http.get<RentDetail[]>(this.API +'/find/' + id)
  }
  getByServiceId(id : number) : Observable<RentDetail[]> {
    return this.http.get<RentDetail[]>(this.API +'/service/' + id)
  }
}
