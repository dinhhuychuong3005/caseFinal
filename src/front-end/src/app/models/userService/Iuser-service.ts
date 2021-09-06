import {User} from '../user/user';
import {categoryService} from '../categoryService/categoryService';

export interface IuserService {
  id?: string;
  user?: User;
  service?: categoryService;
  price?: number;
}
