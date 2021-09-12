import { Component, OnInit } from '@angular/core';
import {UserService} from '../../../service/user/user.service';
import {User} from '../../../models/user/user';

@Component({
  selector: 'app-list-user-to-ccdv',
  templateUrl: './list-user-to-ccdv.component.html',
  styleUrls: ['./list-user-to-ccdv.component.css']
})
export class ListUserToCCDVComponent implements OnInit {

  // @ts-ignore
  user: User ={};

  listUserToCCDV: User[] = [];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.getAllByStatusCCDV3();
  }
  getAllByStatusCCDV3() {
    this.userService.findAllByStatusCCDV3().subscribe(data => {
      this.listUserToCCDV = data;
    })
  }

  getUserById(id: any) {
    this.userService.getById(id).subscribe(user => {
      this.user = user;
    })
  }
  deleteUserDetail() {
    // @ts-ignore
    this.user = {};
  }

  confirmCCDV(id: any) {
    this.userService.changeStatusCCDV(id).subscribe(() => {
    })
  }
  reloadPage() {
    window.location.reload();
  }

}
