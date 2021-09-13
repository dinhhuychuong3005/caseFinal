import {Component, OnInit} from '@angular/core';
import {RentService} from '../../../service/rent/rent.service';
import {RentDetailService} from '../../../service/rent_detail/rent-detail.service';
import {UserService} from '../../../service/user/user.service';
import {CategoryServiceService} from '../../../service/service/category-service.service';
import {User} from '../../../models/user/user';
import {Irent} from '../../../models/rent/Irent';
import {IRentDetail} from '../../../models/rent_detail/irent-detail';
import {RentServiceService} from '../../../service/rent/rent-service.service';

@Component({
  selector: 'app-rent-admin-page',
  templateUrl: './rent-admin-page.component.html',
  styleUrls: ['./rent-admin-page.component.css']
})
export class RentAdminPageComponent implements OnInit {

  constructor(private rentService: RentServiceService, private rentDetailService: RentDetailService,
              private userService: UserService,
              private categoryService: CategoryServiceService,
  ) {
  };
  // @ts-ignore
  user: User = {};
  rentList : Irent[] = [];
  rentById : Irent = {};
  rentDetail : IRentDetail = {};

  ngOnInit(): void {
    this.getAllRentList()
  }
  getAllRentList(){
    this.rentService.getAllRent().subscribe(data=>{
      this.rentList = data;
      console.log(data)
    })
  }
  rentByDetailId : IRentDetail[] = []
  getRentDetailById(id: any){
    this.rentDetailService.getByRentId(id).subscribe(
    data =>{
      this.rentByDetailId = data;
      console.log(this.rentByDetailId)
    }
    )
  }
  findbyId(id : any){
    this.rentService.getById(id).subscribe(data=>{
      this.rentById = data;
    })
  }
  hidden = false;
  checkHidden(){
    this.hidden = true;
  }
  getRentbyid(id : any){
    this.rentService.getById(id).subscribe(data=>{
      this.rentById = data;
    })
  }




}

