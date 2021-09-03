import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../../models/user/user';
import {City} from '../../models/city';

const API_URL = environment.API_URL + '/usersSDDV';

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
    return  this.httpClient.put<User>(API_URL + '/usersCCDV/' + id);
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
}
