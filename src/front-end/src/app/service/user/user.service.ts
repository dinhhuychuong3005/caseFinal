import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../../models/user/user';

const API_URL = environment.API_URL + '/usersSDDV';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }
  getAll(): Observable<User[]> {
    return this.httpClient.get<User[]>(API_URL);
  }
}
