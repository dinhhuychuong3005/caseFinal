import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../../models/user/user';

const API_URL = environment.API_URL + '/usersSDDV';
const API_URL2 = environment.API_URL + '/usersCCDV'
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<User[]> {
    return this.httpClient.get<User[]>(API_URL);
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
}
