import { Component, OnInit } from '@angular/core';
import {Imessage} from '../../models/message/Imessage';
import {MessageService} from '../../service/message/message.service';
import {UserService} from '../../service/user/user.service';
import {User} from '../../models/user/user';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {
  messages: Imessage[] = [];
  messagesByReceiver: Imessage[] = [];
  // @ts-ignore
  userReceiver: User ={};

  // @ts-ignore
  id = JSON.parse(localStorage.getItem('jwtResponse')).id

  constructor(private messageService: MessageService,
              private userService: UserService) {
  }

  ngOnInit(): void {
    this.getMessagesBySenderId();
  }


  getMessagesBySenderId() {
    this.messageService.getBySenderId(this.id).subscribe(data => {
      this.messages = data;
      // console.log(data);
      for (let i = 0; i < this.messages.length; i++) {
        for (let j = i + 1; j < this.messages.length; j++) {
          if (this.messages[i].receiver.id === this.messages[j].receiver.id) {
            this.messages.splice(i, 1);
          }
        }
      }
    })
  }

  getMessagesByReceiver(id: any) {
    this.messageService.getByReceiverId(id).subscribe( data => {
      this.messagesByReceiver = data;
      console.log(data);
    })
  }
  getUserReceiverById(id: any) {
    this.userService.getById(id).subscribe(user =>{
      this.userReceiver = user;
      console.log(this.userReceiver);
    })
  }

}
