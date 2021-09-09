import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Message} from '../../models/message/message';
import {environment} from '../../../environments/environment';

const API_URL = environment.API_URL + '/messages';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(private httpClient: HttpClient) { }


  getBySenderId(id: number): Observable<Message[]> {
    return this.httpClient.get<Message[]>(API_URL + `/sender/${id}`);
  }

  getByReceiverId(id: number): Observable<Message[]> {
    return this.httpClient.get<Message[]>(API_URL + `/receiver/${id}`);
  }

  create(message: Message): Observable<Message> {
    return this.httpClient.post<Message>(API_URL, message);
  }


}
