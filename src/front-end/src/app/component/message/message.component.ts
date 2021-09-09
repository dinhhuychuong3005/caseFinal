import { Component, OnInit } from '@angular/core';
import {Message} from '../../models/message/message';
import {MessageService} from '../../service/message/message.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {
  messages: Message[] = [];

  constructor(private messageService: MessageService) { }

  ngOnInit(): void {
  }

  getMessageBySenderId(id: number) {
    this.messageService.getBySenderId(id).subscribe( data => {
      this.messages = data;
    })
  }

}
