import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Rent} from '../../models/rent/rent';

@Injectable({
  providedIn: 'root'
})
export class RentServiceService {
API = environment.API_URL
  constructor(private http : HttpClient) { }

  getListRentByCCDV(id:number) :Observable<Rent[]> {
  return this.http.get<Rent[]>(this.API + "/rents/user/" + id)
  }
  getListRentBySDDV(id : number) :Observable<Rent[]> {
  return this.http.get<Rent[]>(this.API +  '/rents/user-rent/' + id)
  }

  // @ts-ignore
  changeStatus(id : number , status : number) : Observable<Rent> {
  // @ts-ignore
   return  this.http.put<Rent>(this.API + '/rents/status/' + id + '?status=' + status )

  }
  getById(id : number) : Observable<Rent>{
  return this.http.get<Rent>(this.API + '/' + id)

  }

}
