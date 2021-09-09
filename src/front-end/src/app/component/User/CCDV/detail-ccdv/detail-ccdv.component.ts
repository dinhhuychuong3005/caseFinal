import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../../../../service/user/user.service';
import {ActivatedRoute, Router} from '@angular/router';
import {UserServiceService} from '../../../../service/user-service/user-service.service';
import {IuserService} from '../../../../models/userService/Iuser-service';
import {Irent} from '../../../../models/rent/Irent';
import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';
import {User} from '../../../../models/user/user';
import {RentService} from '../../../../service/rent/rent.service';


@Component({
  selector: 'app-detail-ccdv',
  templateUrl: './detail-ccdv.component.html',
  styleUrls: ['./detail-ccdv.component.css']
})
export class DetailCcdvComponent implements OnInit {
  // @ts-ignore
  user1 : User = {};
  rent: Irent = {};
  date: Date = new Date();
  date2 = '';
  date3 = '';
  date4 = '';
  date5 = '';
  hour = 0;
  total = 0;
  // @ts-ignore
  user: User = {};
  checkDate: Date = new Date();
  arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23];
  arr1 = [];

  rentForm: FormGroup = new FormGroup({

    startDate: new FormControl(),
    totalMoney: new FormControl(this.total),
    time: new FormControl(),
    rentDate: new FormControl(),
    // @ts-ignore

    service: new FormArray([], [Validators.required])

  });

  listUserService: IuserService [] = [];

  totalMoney: number = 0;

  // @ts-ignore
  userCCDV: FormGroup = new FormGroup({
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
    createAt: new FormControl(),
    createAtCCDV: new FormControl(),
    statusCCDV: new FormControl(),
    price: new FormControl(),
  });
  id = 0;
// @ts-ignore
  idUs = JSON.parse(localStorage.getItem('jwtResponse')).id
  constructor(private userService: UserService,
              private activatedRoute: ActivatedRoute,
              private router: Router,
              private formBuilder: FormBuilder,
              private userServiceService: UserServiceService,
              private rentService: RentService) {

  }

  setHour() {
    for (let i = this.hour + 1; i < 24; i++) {
      // @ts-ignore
      this.arr1.push(i);
    }
  }
getByIdUs(){

    this.userService.getById(this.idUs).subscribe(data=>{
      this.user = data;
      console.log(data)
    })
}
  rent1() {
    this.date = new Date();
    console.log(this.date.getHours());
    this.hour = this.date.getHours();

    this.date2 = this.date.getFullYear() + '-' + (this.date.getMonth() + 1) + '-' + this.date.getDate();
    this.date3 = this.date.getFullYear() + '-' + '0' + (this.date.getMonth() + 1) + '-' + '0' + this.date.getDate();
    this.date4 = this.date.getFullYear() + '-' + (this.date.getMonth() + 1) + '-' + '0' + this.date.getDate();
    this.date5 = this.date.getFullYear() + '-' + '0' + (this.date.getMonth() + 1) + '-' + this.date.getDate();

    console.log(this.date5);
    this.setHour();
  }

  ngOnInit(): void {

    this.activatedRoute.paramMap.subscribe(paramMap => {

      // @ts-ignore
      this.id = +paramMap.get('id');
      console.log(this.id);
      this.getUserCCDVById(this.id);
      this.getUserServiceByUserId(this.id);

    });
    this.getByIdUs();
    console.log(this.user);
    console.log(this.idUs)
  }

  change() {
    // @ts-ignore
    this.checkDate = new Date(document.getElementById('a').value);
    console.log(this.checkDate.getDate());
  }

  change1() {
    // @ts-ignore
    this.checkDate = new Date(document.getElementById('b').value);
    console.log(this.checkDate.getDate());
  }

  change2() {
    // @ts-ignore
    this.checkDate = new Date(document.getElementById('c').value);
    console.log(this.checkDate.getDate());
  }

  change3() {
    // @ts-ignore
    this.checkDate = new Date(document.getElementById('d').value);
    console.log(this.checkDate.getDate());
  }

  getUserCCDVById(id: number) {
    // console.log(id);
    this.userService.getCCDVById(id).subscribe(userCCDV => {
      const date = new Date(userCCDV.createAt);
      const str = date.getDay() + '/' + date.getMonth() + '/' + date.getFullYear();
      this.userCCDV.patchValue(userCCDV);
      this.userCCDV.value.createAt = str;
      this.user1 = userCCDV;
      // console.log(this.userCCDV)
    });
  }

  getUserServiceByUserId(id: number) {
    this.userServiceService.findByUserId(id).subscribe(list => {
      // @ts-ignore
      this.listUserService = list;
      console.log(this.listUserService);
    });
  }

  onCheckboxChange(e: any) {
    const service: FormArray = this.rentForm.get('service') as FormArray;

    if (e.target.checked) {

      service.push(new FormControl(e.target.value));

      this.total += parseInt(new FormControl(e.target.value).value);
      this.rentForm.value.totalMoney = this.total;
    } else {
      const index = service.controls.findIndex(x => x.value === e.target.value);
      service.removeAt(index);
      this.total -= parseInt(new FormControl(e.target.value).value);
      this.rentForm.value.totalMoney = this.total;
    }


    console.log(this.total);
  }

  createRent() {
console.log(this.rentForm.value)
    let a = "";
    if (parseInt(this.rentForm.value.startDate) < 10){
      a = this.rentForm.value.rentDate + " 0" + this.rentForm.value.startDate + ":00:00"
    }
     a = this.rentForm.value.rentDate + " " + this.rentForm.value.startDate + ":00:00"

    console.log(a)
    this.rent = {
      user: this.user1,
      userRent: this.user,
      rentDate: this.rentForm.value.rentDate,
      startTime: new Date(a),
      totalMoney: this.total,
      time: this.rentForm.value.time
    }
    console.log(this.rent)
    this.rentService.creatRent(this.rent).subscribe(()=>{
      console.log("ok")
    })
  }
}
