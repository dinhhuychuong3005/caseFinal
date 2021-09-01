import { Component, OnInit } from '@angular/core';
import {UserService} from '../../../../service/user/user.service';
import {User} from '../../../../models/user/user';

@Component({
  selector: 'app-list-ccdv',
  templateUrl: './list-ccdv.component.html',
  styleUrls: ['./list-ccdv.component.css']
})
export class ListCCDVComponent implements OnInit {
  usersCCDV: User [] = [];

  constructor(private userService: UserService) { }
  ngOnInit() {
    this.getAll();
  }
  getAll(){
    this.userService.getAll().subscribe(data => {
      this.usersCCDV = data;
    });
  }
}
