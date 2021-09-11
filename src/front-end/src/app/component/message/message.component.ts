import {Component, OnInit} from '@angular/core';
import {Imessage} from '../../models/message/Imessage';
import {MessageService} from '../../service/message/message.service';
import {UserService} from '../../service/user/user.service';
import {User} from '../../models/user/user';
import {Message} from '@angular/compiler/src/i18n/i18n_ast';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {
  messageForm: FormGroup = new FormGroup({
    sender: new FormControl(),
    receiver: new FormControl(),
    content: new FormControl(),
  });

  // @ts-ignore
  sender: User = {};
  // @ts-ignore
  receiver: User = {};

  allMessageByLover: Imessage[] = [];
  messagesView: Imessage[] = [];
  // @ts-ignore

  listLover: User[] = [];


  // @ts-ignore
  id = JSON.parse(localStorage.getItem('jwtResponse')).id;

  constructor(private messageService: MessageService,
              private userService: UserService) {


  }

  ngOnInit(): void {

    this.getListLover();
    this.getSender();

  }


  getListLover() {
    this.userService.findUserByMessage(this.id).subscribe(data => {
      this.listLover = data;
      for (let i = 0; i < data.length; i++) {
        // @ts-ignore
        this.messageService.getBySenderAndReceiver(this.id, data[i].id).subscribe(data2 => {
          this.messagesView.push(data2[data2.length - 1]);
        });
      }
    });
  }

  getAllMessageWithLover(idLover: any) {
    console.log(idLover)
    this.messageService.getBySenderAndReceiver(this.id, idLover).subscribe(data => {
      this.allMessageByLover = data;

    });
    setInterval(() => {
      this.getAllMessageWithLover(idLover);
    }, 100);
  }

  getSender() {
    this.userService.getById(this.id).subscribe(user => {
      this.sender = user;
    });
  }

  getReceiver(id: any) {
    this.userService.getById(id).subscribe(user => {
      this.receiver = user;

    });
  }


  onSubmit() {
    // @ts-ignore
    this.messageForm.value.receiver = this.receiver;
    // @ts-ignore
    this.messageForm.value.sender = this.sender;
    console.log(this.messageForm.value.receiver,'abc');
    this.messageService.create(this.messageForm.value).subscribe(data => {
      console.log(data);
      this.messageForm.reset();
    });
  }


}
