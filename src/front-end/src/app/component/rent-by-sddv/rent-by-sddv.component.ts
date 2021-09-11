import {Component, OnInit} from '@angular/core';
import {UserService} from '../../service/user/user.service';
import {ActivatedRoute, Router} from '@angular/router';
import {AngularFireStorage} from '@angular/fire/storage';
import {ImgService} from '../../service/image/img.service';
import {RentServiceService} from '../../service/rent/rent-service.service';
import {User} from '../../models/user/user';
import {FormRent} from '../../models/rent/form-rent';
import {Irent} from '../../models/rent/Irent';
import {IRentDetail} from '../../models/rent_detail/irent-detail';
import {error} from 'protractor';
import {RentDetailService} from '../../service/rent_detail/rent-detail.service';

@Component({
  selector: 'app-rent-by-sddv',
  templateUrl: './rent-by-sddv.component.html',
  styleUrls: ['./rent-by-sddv.component.css']
})
export class RentBySDDVComponent implements OnInit {

// @ts-ignore
  id: number;
  // @ts-ignore
  user: User = {};
  rentBySDDV: Irent = {};
  rents: Irent[] = [];

  constructor(private userService: UserService, private activateRoute: ActivatedRoute, private router: Router,
              private angularFireStore: AngularFireStorage, private img: ImgService, private rentDetailServiceService: RentDetailService, private rentService: RentServiceService) {
  }

  ngOnInit(): void {
    this.activateRoute.paramMap.subscribe((paramMap) => {
      // @ts-ignore
      this.id = +paramMap.get(`id`);
      this.getUserbyId(this.id);
      this.getRentBySDDV(this.id);
    });
  }

  getUserbyId(id: number) {
    this.userService.getById(id).subscribe(data => {
      this.user = data;
      console.log(this.user);
    });
  }

  getRentBySDDV(id: number) {
    this.rentService.getListRentBySDDV(id).subscribe(data => {
      this.rents = data;
      console.log(data);
    });
  }

  getbyId(id: any) {
    console.log(id);
    this.rentBySDDV.id = id;
  }

  deleteRentById(id: any) {
    this.rentService.deleteRent(id).subscribe(data => {
      console.log(data);
      window.location.reload();
    });
  }

  hidden = true;

  checkHidden() {
    this.hidden = false;
  }

  // @ts-ignore
  rentDetail: IRentDetail[] = [];

  getRentDetailByRentId(id: any) {
    this.rentDetailServiceService.getByRentId(id).subscribe(
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
    this.rentService.getById(id).subscribe(data=>{
      this.rentbyId = data;
      console.log(this.rentbyId)
    })
  }


}
