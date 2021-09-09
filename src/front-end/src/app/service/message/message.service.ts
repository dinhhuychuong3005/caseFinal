import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Imessage} from '../../models/message/Imessage';
import {environment} from '../../../environments/environment';

const API_URL = environment.API_URL + '/messages';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(private httpClient: HttpClient) { }


  getBySenderId(id: number): Observable<Imessage[]> {
    return this.httpClient.get<Imessage[]>(API_URL + `/sender/${id}`);
  }

  getByReceiverId(id: number): Observable<Imessage[]> {
    return this.httpClient.get<Imessage[]>(API_URL + `/receiver/${id}`);
  }

  create(message: Imessage): Observable<Imessage> {
    return this.httpClient.post<Imessage>(API_URL, message);
  }


}
