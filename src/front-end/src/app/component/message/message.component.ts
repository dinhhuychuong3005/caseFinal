import { Component, OnInit } from '@angular/core';
import {Imessage} from '../../models/message/Imessage';
import {MessageService} from '../../service/message/message.service';
import {UserService} from '../../service/user/user.service';
import {User} from '../../models/user/user';
import {Message} from '@angular/compiler/src/i18n/i18n_ast';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {
  messages: Imessage[] = [];
  messagesByReceiver: Imessage[] = [];
  messagesByUser: Imessage[] = [];
  allMessageByUser: Imessage[] = [];
  // @ts-ignore
  userReceiver: User = {};

  // @ts-ignore
  id = JSON.parse(localStorage.getItem('jwtResponse')).id

  constructor(private messageService: MessageService,
              private userService: UserService) {
  }

  ngOnInit(): void {
    this.getMessagesBySenderId();
    this.getMessagesByUser();
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
    this.messageService.getByReceiverId(id).subscribe(data => {
      this.messagesByReceiver = data;
      // console.log(data);
    })
  }

  getMessagesByUser() {
    this.messageService.getByReceiverId(this.id).subscribe(data => {
      this.messagesByUser = data;
      // console.log(data);
    })
  }

  getAllMessagesByUser() {
    // @ts-ignore
    this.allMessageByUser = this.messagesByUser.concat(this.messagesByReceiver);
    // @ts-ignore
    let message: Message = this.allMessageByUser[0]
    for (let i = 0; i < this.allMessageByUser.length - 1; i++) {
      for (let k = i + 1; k < this.allMessageByUser.length; k++) {
        if (this.allMessageByUser[i].time > this.allMessageByUser[k].time) {
          // @ts-ignore
          message = this.allMessageByUser[k];
          this.allMessageByUser[k] = this.allMessageByUser[i];
          // @ts-ignore
          this.allMessageByUser[i] = message;
        }
      }
    }
    console.log(this.allMessageByUser);
  }
  
}
