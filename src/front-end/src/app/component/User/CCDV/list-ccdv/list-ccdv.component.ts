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
  page = 1;
  count = 0;
  tableSize = 8;
  tableSizesArr = [4, 8, 12];
  currentIndex = 1;

  constructor(private userService: UserService) { }
  ngOnInit() {
    this.getAll();
  }

  getAll(){
    this.userService.getAll().subscribe(data => {
      this.usersCCDV = data;
    });
  }
  tabSize(event: any) {
    this.page = event;
    this.getAll();
  }
  tableData(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.getAll();
  }
}
