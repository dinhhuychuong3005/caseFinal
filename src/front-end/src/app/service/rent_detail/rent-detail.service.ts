import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
const API_URL = environment.API_URL + '/rent_detail';
@Injectable({
  providedIn: 'root'
})
export class RentDetailService {

  constructor() { }
}
