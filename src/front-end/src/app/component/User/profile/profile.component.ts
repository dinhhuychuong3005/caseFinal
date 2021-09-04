import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {AngularFireStorage, AngularFireStorageReference} from '@angular/fire/storage';

import {User} from '../../../models/user/user';
import {JwtResponse} from '../../../models/in-out/jwt-response';
import {ImgService} from '../../../service/image/img.service';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { BehaviorSubject, Observable } from 'rxjs';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  listServiceShow = [1,2,3,4,5,6,7];
  listServiceSelect = [];

// @ts-ignore
  jwt: JwtResponse = JSON.parse(localStorage.getItem('jwtResponse'));
  // @ts-ignore
  private currentUserSubject: BehaviorSubject<JwtResponse>;
  // @ts-ignore
  public currentUser: Observable<JwtResponse>;
  constructor(

  ) {
    // @ts-ignore
    this.currentUserSubject = new BehaviorSubject<JwtResponse>(JSON.parse(localStorage.getItem('jwtResponse')));
    this.currentUser = this.currentUserSubject.asObservable();
    console.log(this.currentUser)
    }

  ngOnInit(): void {
  }










}
