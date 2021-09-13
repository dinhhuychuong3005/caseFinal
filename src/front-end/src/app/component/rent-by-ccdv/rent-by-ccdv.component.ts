import { Component, OnInit } from '@angular/core';
import {UserService} from "../../service/user/user.service";
import {ActivatedRoute, Router} from "@angular/router";
import {AngularFireStorage} from "@angular/fire/storage";
import {ImgService} from "../../service/image/img.service";
import {RentServiceService} from "../../service/rent/rent-service.service";
import {User} from "../../models/user/user";
import {Irent} from '../../models/rent/Irent';
import {RentDetailService} from '../../service/rent_detail/rent-detail.service';
import {IRentDetail} from '../../models/rent_detail/irent-detail';


@Component({
  selector: 'app-rent-by-ccdv',
  templateUrl: './rent-by-ccdv.component.html',
  styleUrls: ['./rent-by-ccdv.component.css']
})
export class RentByCCDVComponent implements OnInit {
  // @ts-ignore
  user : User = {};
  // @ts-ignore
  rent : Rent = {};
  // @ts-ignore
  id:number;
  rents : Irent[] = []
  constructor(private userService: UserService, private activateRoute: ActivatedRoute, private router: Router,
              private angularFireStore: AngularFireStorage, private img: ImgService,private rentDetailService : RentDetailService,private rentService : RentServiceService) { }

  ngOnInit(): void {
    this.activateRoute.paramMap.subscribe((paramMap) => {
      // @ts-ignore
      this.id = +paramMap.get(`id`);
      this.getUserbyId(this.id);
      this.getRentByCCDV(this.id)
      console.log(this.rentDetail)

  })

  }

  getUserbyId(id : number){
    this.userService.getById(id).subscribe(data=>{
      this.user = data;
      console.log(this.user)
    })
  }
  getRentByCCDV(id : any){
    this.rentService.getListRentByCCDV(id).subscribe(data =>{
      this.rents = data;
      console.log(data)
    })
  }

  chageStatus( status : number){
    console.log(status,this.rent.id)
    // @ts-ignore
    this.rentService.changeStatus(this.rent.id,status).subscribe(data =>{
      this.rent = data;
      console.log(this.rent.status)
      console.log('ok')
      window.location.reload()
    })


  }
  getbyId(id: any){
    console.log(id)
    this.rent.id = id;
  }
  hidden = true;
  checkhidden(){
    this.hidden = false;
  }
  // @ts-ignore
  userSDDV : User = {};
  getByUserSDDVId(id : any){
    this.userService.getById(id).subscribe(data =>{
      this.userSDDV = data;
    })
  }
  deleteRentById(id : any){
    this.rentService.deleteRent(id).subscribe(data =>{
      console.log(data)
      window.location.reload()
    })
  }
  // @ts-ignore
  rent1 :Irent[] = {};
  rentDetail: IRentDetail[] = [];

  getRentDetailByRentId(id: any) {
    this.rentDetailService.getByRentId(id).subscribe(
      data => {
        this.rentDetail = data;
        console.log(data);
      }
    )
  }

  // @ts-ignore
  userCCDV: User = {};

  getByUserCCDVId(id: any) {
    this.userService.getById(id).subscribe(data => {
      this.userCCDV = data;
    });
  }
  rentbyId : Irent = {}
  getRentbyId(id : any){
    this.rentService.getById(id).subscribe(data =>{
      this.rentbyId = data;
      console.log(this.rentbyId)
      console.log(data)
    })
  }


}
