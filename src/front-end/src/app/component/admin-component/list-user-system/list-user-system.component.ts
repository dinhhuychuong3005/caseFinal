import {Component, OnInit} from '@angular/core';
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


  idUs = 0;
  page = 1;
  count = 0;
  tableSize = 10;
  tableSizesArr = [5, 10, 15];
  currentIndex = 1;


  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
    this.getAllUserSystem();
    this.getAllCCDV();
    this.getAllSDDV();
    this.getListVipUser();


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
      console.log(list)
    });
  }

  getUserById(id: any) {
    this.userService.getById(id).subscribe(user => {
      this.user = user;
    });
  }

  deleteUserDetail() {
    // @ts-ignore
    this.user = {};
  }



  sort1: string = '';

  getSelect1() {
    // @ts-ignore
    this.sort1 = document.getElementById('sort1').value;
    return this.sort1
  }

  listCCDV: User[] = [];

  getAllCCDV() {
    this.userService.getAllCCDV().subscribe(data => {
      this.listCCDV = data;
    });
  }

  listSDDV: User[] = [];

  getAllSDDV() {
    this.userService.getAllSDDV().subscribe(data => {
      this.listSDDV = data;

    });
  }
  // @ts-ignore
  userVip : User = {}
  // @ts-ignore
  userDeVip : User = {}
  getbyId(id : any){
      this.userService.getById(id).subscribe(data=>{
        this.userVip=data;
        this.userDeVip = data;
        console.log(data)

      })
  }
  ChangeVipUser(id : any){
    this.userService.ChangeVipUser(id).subscribe(data=>{
      console.log('ok')
      window.location.reload()
    })
  }
  userListVip : User[] = [];
  getListVipUser(){
    this.userService. getVipUser().subscribe(data=>{
      this.userListVip = data;
      console.log(data)
    })
  }
  DeleteVip(id : any){
    this.userService.deleteVipUser(id).subscribe(data=>{
      console.log('ok')
      window.location.reload()
    })
  }


}
