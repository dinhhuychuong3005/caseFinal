import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../../models/user/user';
import {City} from '../../models/city';

const API_URL = environment.API_URL + '/usersSDDV';

const API_URL2 = environment.API_URL + '/usersCCDV'

const API_CCDV = environment.API_URL + '/usersCCDV'

@Injectable({
  providedIn: 'root'
})
export class UserService {


  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<User[]> {
    return this.httpClient.get<User[]>(API_URL);
  }



  saveUser(id: number, user: User): Observable<User> {
    // @ts-ignore
    return  this.httpClient.put<User>(API_CCDV +`/`  + id,user);
  }
  getListCity(): Observable<City[]> {
    return this.httpClient.get<City[]>('https://provinces.open-api.vn/api/p/');

  }
  getCCDVById(id: number): Observable<User> {
    return this.httpClient.get<User>(API_URL + `/${id}`)
  }
  get12NewCCDV(): Observable<User[]> {
    return this.httpClient.get<User[]>(API_URL + `/get12new`)
  }
  getById(id: number): Observable<User> {
    return this.httpClient.get<User>(API_URL + `/user` + `/${id}`)

  }
  updateUser(id: number, user: User): Observable<User>{
    return this.httpClient.put<User>(API_URL2 + "/" + id,user);
  }
  updateAvt(id: number, user: User): Observable<User>{
    return this.httpClient.put<User>(API_URL2 + "/avatar/" + id,user);
  }
  updatePassword(id: number, user: User): Observable<User>{
    return this.httpClient.put<User>(API_URL2 + "/password/" + id,user);
  }
  savePriceUser(id : number, price : any) : Observable<User>{
    // @ts-ignore
    return  this.httpClient.put<User>(API_CCDV + '/price/' + id + '?price=' + price)
  }
}
