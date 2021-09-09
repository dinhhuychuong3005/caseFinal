import {User} from '../user/user';

export interface FormRent {
  id?:number;
  userCCDV?: User;
  userSDDV?: User;
  rentDate?: Date;
  startDate?:Date;
  totalMoney?:number;
  time?:number;
}
