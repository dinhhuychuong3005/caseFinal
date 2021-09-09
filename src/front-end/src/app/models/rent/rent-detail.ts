import {Rent} from './rent';
import {CategoryServiceService} from '../../service/service/category-service.service';

export interface RentDetail {
  id?:number;
  rent?:Rent;
  categoryService?:CategoryServiceService;
  time:number;
}
