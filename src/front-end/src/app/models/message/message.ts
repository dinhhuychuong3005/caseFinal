import {User} from '../user/user';

export interface Message {
  id: number,
  sender: User,
  receiver: User,
  content: string,
  status: number
}
