import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {UserService} from '../../../../service/user/user.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-detail-ccdv',
  templateUrl: './detail-ccdv.component.html',
  styleUrls: ['./detail-ccdv.component.css']
})
export class DetailCcdvComponent implements OnInit {
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

  constructor(private userService: UserService,
              private activatedRoute: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe( paramMap => {
      // @ts-ignore
      this.id = +paramMap.get('id');
      console.log(this.id);
      this.getUserCCDVById(this.id);
    });
  }

  getUserCCDVById(id: number) {
    console.log(id);
    this.userService.getCCDVById(id).subscribe(userCCDV => {
      const date = new Date(userCCDV.createAt);
      const str = date.getDay() + '/' + date.getMonth() + '/' + date.getFullYear();
      this.userCCDV.patchValue(userCCDV);
      this.userCCDV.value.createAt = str;
    });
  }

}
