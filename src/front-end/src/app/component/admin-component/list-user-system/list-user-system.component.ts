import { Component, OnInit } from '@angular/core';
import {User} from '../../../models/user/user';
import {UserService} from '../../../service/user/user.service';

@Component({
  selector: 'app-list-user-system',
  templateUrl: './list-user-system.component.html',
  styleUrls: ['./list-user-system.component.css']
})
export class ListUserSystemComponent implements OnInit {
  status: number = 0;

  listUser: User[] = [];
  // @ts-ignore
  user: User = {};

  idUs = 0;
  page = 1;
  count = 0;
  tableSize = 10;
  tableSizesArr = [5, 10, 15];
  currentIndex = 1;


  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.getAllUserSystem();
  }


  tabSize(event: any) {
    this.page = event;
    this.getAllUserSystem();
  }

  tableData(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
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

  changeStatusUs(id: any) {
    this.userService.changeStatusUs(id).subscribe(data => {
      this.user = data;
    })
  }


}
