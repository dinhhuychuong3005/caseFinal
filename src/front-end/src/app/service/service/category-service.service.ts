  import { Injectable } from '@angular/core';
  import {HttpClient} from '@angular/common/http';
  import {environment} from '../../../environments/environment';
  import {Observable} from 'rxjs';
  import {categoryService} from '../../models/categoryService/categoryService';

  const API_URL = environment.API_URL + '/categoryServices';

@Injectable({
  providedIn: 'root'
})
export class CategoryServiceService {

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<categoryService[]> {
    return this.httpClient.get<categoryService[]>(API_URL);
  }

  getById(id: number): Observable<categoryService> {
    return this.httpClient.get<categoryService>(API_URL + `/${id}`)
  }

  updatePrice(id: number, categoryService: CategoryServiceService): Observable<categoryService> {
    return this.httpClient.put<categoryService>(API_URL + `/${id}`, categoryService)
  }


}
