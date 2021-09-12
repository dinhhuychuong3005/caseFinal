import { Component, OnInit } from '@angular/core';
import {User} from '../../../models/user/user';
import {UserService} from '../../../service/user/user.service';
import {RentService} from '../../../service/rent/rent.service';
import {Irent} from '../../../models/rent/Irent';
import {RentServiceService} from '../../../service/rent/rent-service.service';
import {CategoryServiceService} from '../../../service/service/category-service.service';
import {categoryService} from '../../../models/categoryService/categoryService';

@Component({
  selector: 'app-navbar-admin',
  templateUrl: './navbar-admin.component.html',
  styleUrls: ['./navbar-admin.component.css']
})
export class NavbarAdminComponent implements OnInit {
//
//   listUserToCCDV: User[] = [];
//   listUserSystem: User[] = [];
  rents : Irent[] = [];
  category : categoryService[] = [];
//
  constructor(private userService: UserService,private rentService : RentServiceService,private categoryService : CategoryServiceService) { }

  ngOnInit(): void {
    // this.getAllByStatusCCDV3();
    // this.getAllUserSystem();
    this.getAllRent(),
      this.getAllCategory()
  }
//   getAllByStatusCCDV3() {
//     this.userService.findAllByStatusCCDV3().subscribe(data => {
//       this.listUserToCCDV = data;
//     })
//   }
//   getAllUserSystem() {
//     this.userService.getAll().subscribe(list => {
//       this.listUserSystem = list;
//     })
//   }
//
  getAllRent(){
    this.rentService.getAllRent().subscribe(data=>{
      this.rents= data;
      console.log(data)
    })
  }
  getAllCategory(){
    this.categoryService.getAll().subscribe(data=>{
      this.category = data;
      console.log(data)
    })
  }
}
