import {Component, OnInit} from '@angular/core';
import {UserService} from '../../../../service/user/user.service';
import {User} from '../../../../models/user/user';
import {City} from '../../../../models/city';

@Component({
  selector: 'app-list-ccdv',
  templateUrl: './list-ccdv.component.html',
  styleUrls: ['./list-ccdv.component.css']
})
export class ListCCDVComponent implements OnInit {
  usersCCDV: User [] = [];

  usersCCDVByName: User [] = [];
  usersCCDVByAge: User [] = [];
  usersCCDVByCity: User [] = [];
  usersCCDVByGender: User [] = [];


  page = 1;
  count = 0;
  tableSize = 8;
  // tableSizesArr = [4, 8, 12];
  currentIndex = 1;



  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.getAll();
    this.get12User();
    this.getCity()
  }

  getAll() {
    this.userService.getAll().subscribe(data => {
      this.usersCCDV = data;
    });
  }

  get12User() {

    this.userService.getAll().subscribe(data => {
      for (let i = 0; i < data.length; i++) {
        const date = new Date(data[i].createAtCCDV)
        const dateNow = new Date();

        console.log(date.getTime())
        console.log(date)


      }
      console.log("a")
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
  get12NewCCDV(){
    this.userService.get12NewCCDV().subscribe(data => {
      this.usersCCDV = data;
    })
  }
  city: City[] = [];
  getCity(){
    this.userService.getListCity().subscribe(data => {
      this.city = data;
    })
  }

  findByName(name: string) {
    // @ts-ignore
    this.userService.findByName().subscribe(data => {
      // @ts-ignore
      this.usersCCDVByName = data;
    })
  }

  findByCity() {
    // @ts-ignore
    let city = document.getElementById('city').value;

    // @ts-ignore
    this.userService.findByCity(city).subscribe(data => {
      // @ts-ignore
      this.usersCCDVByCity = data;

    })
  }

  findByGender() {
    // @ts-ignore
    let gender = document.getElementById('gender').value;
    // @ts-ignore
    this.userService.findByGender(gender).subscribe(data => {
      // @ts-ignore
      this.usersCCDVByGender = data;
    })
  }

  findByAge(age1: number, age2: number) {
    // @ts-ignore
    this.userService.findByName().subscribe(data => {
      // @ts-ignore
      this.usersCCDVByCity = data;
    })
  }


}
