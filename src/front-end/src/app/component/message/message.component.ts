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

  messagesView: Imessage[] = [];
  allMessages: Imessage[] = [];
  listLoverId: number[] = [];

  allMessageByLover: Imessage[] = [];



  // @ts-ignore
  id = JSON.parse(localStorage.getItem('jwtResponse')).id;

  constructor(private messageService: MessageService,
              private userService: UserService) {
  }

  ngOnInit(): void {
    // this.getMessageView();
    this.getAllMessageByUser();
  }

  getAllMessageByUser() {
    this.messageService.getAllByUser(this.id).subscribe(data => {
      this.messagesView = data;
    })
  }

  // Lấy danh sách id người nhắn tin với user
  getListLoverId() {
    let listLoverIdNew = [];
    for (let i = 0; i < this.messagesView.length; i++) {
      // @ts-ignore
      this.listLoverId.push(this.messagesView[i].sender.id);
      // @ts-ignore
      this.listLoverId.push(this.messagesView[i].receiver.id);
    }
    for (let i = 0; i < this.listLoverId.length; i++) {
        if (listLoverIdNew.indexOf(this.listLoverId[i])===-1 && this.listLoverId[i]!=this.id) {
          listLoverIdNew.push(this.listLoverId[i])
        }
    }
    // console.log(listLoverIdNew);
  }



  getMessagesByLover(id: any) {
    this.messageService.getAllByUser(id).subscribe(data =>{
      this.allMessageByLover = data;
    })
    // for (let i = 0; i < this.allMessageByLover.length - 1; i++) {
    //   for (let k = i + 1; k < this.allMessageByLover.length; k++) {
    //     if (this.allMessageByLover[i].time > this.allMessageByLover[k].time) {
    //       // @ts-ignore
    //       messageLover = this.allMessageByLover[k];
    //       this.allMessageByLover[k] = this.allMessageByLover[i];
    //       // @ts-ignore
    //       this.allMessageByLover[i] = message;
    //     }
    //   }
    // }
    console.log(this.allMessageByLover);
  }

  onSubmit() {
    // this.messageForm.value.receiver = this.userReceiver;
    // this.messageForm.value.sender = this.userSender;
    this.messageService.create(this.messageForm.value).subscribe(data => {
      // console.log(data);
      this.messageForm.reset();
      alert('Đã thêm thành công');
      // this.router.navigate(['/books/list']);
    });
  }



}
