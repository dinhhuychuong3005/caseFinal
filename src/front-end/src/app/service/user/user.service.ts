import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../../models/user/user';

const API_URL = environment.API_URL + '/usersSDDV';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) {
  }

  getAll(): Observable<User[]> {
    return this.httpClient.get<User[]>(API_URL);
  }

  getById(id: number): Observable<any> {
    return this.httpClient.get<any>(API_URL + '/usersCCDV/' + id);
  }

  saveUser(id: number, user: User): Observable<User> {
    // @ts-ignore
    return  this.httpClient.put<User>(API_URL + '/usersCCDV/' + id);
  }
  getListCity(): Observable<any[]>{
    return this.httpClient.get<any[]>('https://provinces.open-api.vn/api/p/');

  }
}
