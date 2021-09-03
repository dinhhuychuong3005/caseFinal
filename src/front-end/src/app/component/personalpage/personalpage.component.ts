import { Component, OnInit } from '@angular/core';
import {UserService} from '../../service/user/user.service';
import {ActivatedRoute, Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {User} from '../../models/user/user';
import {City} from '../../models/city';

@Component({
  selector: 'app-personalpage',
  templateUrl: './personalpage.component.html',
  styleUrls: ['./personalpage.component.css']
})
export class PersonalpageComponent implements OnInit {
  city : City[] =[]
  // @ts-ignore
  user : User
// @ts-ignore
  id: number;
userForm : FormGroup  = new FormGroup({
  password : new FormControl(),
  userName: new FormControl(),
  email: new FormControl(),
  phoneNumber: new FormControl(),
  name: new FormControl(),
  dateOfBirth: new FormControl(),
  gender: new FormControl(),
  city: new FormControl(),
  nationality: new FormControl(),
  avatar: new FormControl(),
  height: new FormControl(),
  weight: new FormControl(),
  hobby: new FormControl(),
  description: new FormControl(),
  requestToPayer: new FormControl(),
  linkFb: new FormControl(),
  // createAt: new FormControl(),
  // createAtCCDV: new FormControl(),
  // statusCCDV: new FormControl(),
  price: new FormControl(),
})
  constructor(private userService : UserService , private activateRoute : ActivatedRoute, private router : Router) {
    this.activateRoute.paramMap.subscribe((paramMap) => {
      // @ts-ignore
      this.id = +paramMap.get(`id`);
      this.getUserById(this.id)
    })
  }

  ngOnInit(): void {
  this.infoUser(this.id);
  this.getCity();
  }
  getUserById(id : number){
  this.userService.getById(id).subscribe(data=>{
    this.userForm = new FormGroup({
      // password : new FormControl(data.password),
      // userName: new FormControl(data.userName),
      email: new FormControl(data.email),
      phoneNumber: new FormControl(data.phoneNumber),
      name: new FormControl(data.name),
      dateOfBirth: new FormControl(data.dateOfBirth),
      gender: new FormControl(data.gender),
      city: new FormControl(data.city),
      nationality: new FormControl(data.nationality),
      avatar: new FormControl(data.avatar),
      height: new FormControl(data.height),
      weight: new FormControl(data.weight),
      hobby: new FormControl(data.hobby),
      description: new FormControl(data.description),
      requestToPayer: new FormControl(data.requestToPayer),
      linkFb: new FormControl(data.linkFb),
      // createAt: new FormControl(data.createAt),
      // createAtCCDV: new FormControl(),
      // statusCCDV: new FormControl(),
      price: new FormControl(data.price),
    })
  })
  }
  saveUser(id : number){
  this.userService.saveUser(id, this.userForm.value).subscribe(data => {
    console.log('ok')
  })
  }
  infoUser(id : number){
    this.userService.getById(id).subscribe(data =>{
      this.user = {
        avatar: data.avatar,
        city: data.city,
        createAt: data.createAt,
        createAtCCDV: data.createAtCCDV,
        dateOfBirth: data.dateOfBirth,
        description: data.description,
        email: data.email,
        gender: data.gender,
        height: data.height,
        hobby: data.hobby,
        linkFb: data.linkFb,
        name: data.name,
        nationality: data.nationality,
        password: data.password,
        phoneNumber: data.phoneNumber,
        price: data.price,
        requestToPayer: data.requestToPayer,
        statusCCDV: data.statusCCDV,
        statusUs: data.statusUs,
        userName: data.userName,
        weight: data.weight,
        id : data.id
      }
    })
  }
  getCity(){
  this.userService.getListCity().subscribe(data =>{
    // @ts-ignore
    this.city = data;
  })
  }

}
