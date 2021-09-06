import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {AngularFireStorage, AngularFireStorageReference} from '@angular/fire/storage';

import {User} from '../../../models/user/user';
import {JwtResponse} from '../../../models/in-out/jwt-response';
import {ImgService} from '../../../service/image/img.service';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {BehaviorSubject, Observable} from 'rxjs';
import {IuserService} from '../../../models/userService/Iuser-service';
import {UserServiceService} from '../../../service/user-service/user-service.service';
import {categoryService} from "../../../models/categoryService/categoryService";

@Component({
  selector: 'app-profile',
  templateUrl: './edit-price.component.html',
  styleUrls: ['./edit-price.component.css']
})
export class EditPriceComponent implements OnInit {
  listUserService: IuserService[] = [];
price1: number = 0;

  idUs: number = 0;
  // @ts-ignore
  jwt: JwtResponse = JSON.parse(localStorage.getItem('jwtResponse'));
  constructor( private userService: UserServiceService,) {

  }

  ngOnInit(): void {
    this.getListServiceRegister();
  }

  getListServiceRegister(){

    // @ts-ignore
    this.userService.findByUserId(this.jwt.id).subscribe(data =>{
     // @ts-ignore
      this.listUserService = data;

    })
  }

  updatePrice(id: number, usService: IuserService){
    console.log(usService)
    // @ts-ignore
    usService.price = this.price1;
    this.userService.updatePrice(id,usService).subscribe(data=>{
      console.log("ok")
    })
  }
}
