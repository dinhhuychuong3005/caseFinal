import {Component, OnInit} from '@angular/core';
import {UserService} from '../../../../service/user/user.service';
import {User} from '../../../../models/user/user';
import {City} from '../../../../models/city';
import {LabelType, Ng5SliderModule, Options} from 'ng5-slider';

@Component({
  selector: 'app-list-ccdv',
  templateUrl: './list-ccdv.component.html',
  styleUrls: ['./list-ccdv.component.css']
})
export class ListCCDVComponent implements OnInit {
  usersCCDV: User [] = [];
  usersTopNew: User [] = [];

  usersCCDVByName: User [] = [];
  usersCCDVByAge: User [] = [];
  usersCCDVByCity: User [] = [];
  usersCCDVByGender: User [] = [];
  userTest: User [] = [];
  userTest1: User [] = [];


  page = 1;
  count = 0;
  tableSize = 8;
  tableSizesArr = [4, 8, 12];
  currentIndex = 1;
userTest2: User [] = [];

  minValue: any = 18;
  maxValue: any = 40;
  options: Options = {
    floor: 18,
    ceil: 40,
    translate: (value: number, label: LabelType): string => {
      switch (label) {
        case LabelType.Low:
          return '<b>Min:</b>' + value;
        case LabelType.High:
          return '<b>Max:</b>' + value;
        default:
          return '' + value;
      }
    }
  };


  constructor(private userService: UserService) {

  }

  ngOnInit() {
    this.getAll();
    this.get12NewCCDV();
    this.getCity();
    console.log(this.usersCCDV);
    this.userTest1.length = 0;
  }

  getAll() {
    this.userService.getAll().subscribe(data => {
      this.usersCCDV = data;
      console.log(this.usersCCDV);
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

  get12NewCCDV() {
    this.userService.get12NewCCDV().subscribe(data => {
      this.usersTopNew = data;
    });
  }

  city: City[] = [];

  getCity() {
    this.userService.getListCity().subscribe(data => {
      this.city = data;
    });
  }

  findByName() {
    // @ts-ignore
    let name = document.getElementById('name').value;

    // @ts-ignore
    this.userService.findByName(name).subscribe(data => {

      // @ts-ignore
      this.usersCCDVByName = data;
    });
  }

  findByCity() {
    // @ts-ignore
    let city = document.getElementById('city').value;

    // @ts-ignore
    this.userService.findByCity(city).subscribe(data => {
      // @ts-ignore
      this.usersCCDVByCity = data;
      // console.log(this.usersCCDVByCity);

    });
  }

  findByGender() {
    // @ts-ignore
    let gender = document.getElementById('gender').value;
    // @ts-ignore
    console.log(gender)
    this.userService.findByGender(gender).subscribe(data => {

      // @ts-ignore
      this.usersCCDVByGender = data;
      // console.log(this.usersCCDVByGender)
    });
  }

  findByAge(age1: number, age2: number) {
    // @ts-ignore
    this.userService.findByName().subscribe(data => {
      // @ts-ignore
      this.usersCCDVByCity = data;
    });
  }

  searchUser() {

    this.userTest = this.usersCCDVByGender.concat(this.usersCCDVByCity).concat(this.usersCCDVByName);
    if (this.userTest.length == this.usersCCDVByGender.length) {
      this.userTest1 = this.usersCCDVByGender;
    } else if (this.userTest.length == this.usersCCDVByCity.length) {
      this.userTest1 = this.usersCCDVByCity;
    } else if (this.userTest.length == this.usersCCDVByName.length) {
      this.userTest1 = this.usersCCDVByName;

    } else {

      for (let i = 0; i < this.userTest.length; i++) {

        for (let j = i + 1; j < this.userTest.length; j++) {
          if (this.userTest[i].id === this.userTest[j].id) {
            this.userTest1.push(this.userTest[i]);
            console.log(this.userTest1)
          }
        }
      }
    }
  }


  reloadHome(){
    window.location.reload()
  }




}
