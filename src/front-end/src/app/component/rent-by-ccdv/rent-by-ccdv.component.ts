import { Component, OnInit } from '@angular/core';
import {UserService} from "../../service/user/user.service";
import {ActivatedRoute, Router} from "@angular/router";
import {AngularFireStorage} from "@angular/fire/storage";
import {ImgService} from "../../service/image/img.service";
import {RentDetailServiceService} from "../../service/rentDetail/rent-detail-service.service";
import {RentServiceService} from "../../service/rent/rent-service.service";
import {User} from "../../models/user/user";
import {Rent} from "../../models/rent/rent";

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
  rents : Rent[] = []
  constructor(private userService: UserService, private activateRoute: ActivatedRoute, private router: Router,
              private angularFireStore: AngularFireStorage, private img: ImgService,private rentDetail : RentDetailServiceService,private rentService : RentServiceService) { }

  ngOnInit(): void {
    this.activateRoute.paramMap.subscribe((paramMap) => {
      // @ts-ignore
      this.id = +paramMap.get(`id`);
      this.getUserbyId(this.id);
      this.getRentByCCDV(this.id)
  })

  }

  getUserbyId(id : number){
    this.userService.getById(id).subscribe(data=>{
      this.user = data;
      console.log(this.user)
    })
  }
  getRentByCCDV(id : number){
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

}
