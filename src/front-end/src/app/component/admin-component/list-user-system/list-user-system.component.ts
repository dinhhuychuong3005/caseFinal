import { Component, OnInit } from '@angular/core';
import {User} from '../../../models/user/user';
import {UserService} from '../../../service/user/user.service';

@Component({
  selector: 'app-list-user-system',
  templateUrl: './list-user-system.component.html',
  styleUrls: ['./list-user-system.component.css']
})
export class ListUserSystemComponent implements OnInit {
  listUser: User[] = [];
  // @ts-ignore
  user: User = {};

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.getAllUserSystem();
  }

  getAllUserSystem() {
    this.userService.getAll().subscribe(list => {
      this.listUser = list;
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


}
