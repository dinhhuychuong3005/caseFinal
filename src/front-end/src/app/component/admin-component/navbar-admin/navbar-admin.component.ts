import { Component, OnInit } from '@angular/core';
import {User} from '../../../models/user/user';
import {UserService} from '../../../service/user/user.service';

@Component({
  selector: 'app-navbar-admin',
  templateUrl: './navbar-admin.component.html',
  styleUrls: ['./navbar-admin.component.css']
})
export class NavbarAdminComponent implements OnInit {

  listUserToCCDV: User[] = [];
  listUserSystem: User[] = [];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.getAllByStatusCCDV3();
    this.getAllUserSystem();
  }
  getAllByStatusCCDV3() {
    this.userService.findAllByStatusCCDV3().subscribe(data => {
      this.listUserToCCDV = data;
    })
  }
  getAllUserSystem() {
    this.userService.getAll().subscribe(list => {
      this.listUserSystem = list;
    })
  }

}
