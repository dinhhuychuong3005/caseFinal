import { Component, OnInit } from '@angular/core';
import {UserService} from '../../../service/user/user.service';
import {ActivatedRoute, Router} from '@angular/router';
import {AngularFireStorage} from '@angular/fire/storage';
import {ImgService} from '../../../service/image/img.service';
import {Rent} from '../../../models/rent/rent';
import {User} from '../../../models/user/user';

@Component({
  selector: 'app-rentdetail',
  templateUrl: './rentdetail.component.html',
  styleUrls: ['./rentdetail.component.css']
})
export class RentdetailComponent implements OnInit {
  // @ts-ignore
  id: number;
  // @ts-ignore
  user: User = {}
  rent : Rent[] = []
  constructor(private userService: UserService, private activateRoute: ActivatedRoute, private router: Router,
              private angularFireStore: AngularFireStorage, private img: ImgService) {
  }

  ngOnInit(): void {
    this.activateRoute.paramMap.subscribe((paramMap) => {
      // @ts-ignore
      this.id = +paramMap.get(`id`);
      this.getUserById(this.id);
    })


  }
  getUserById(id : number){
    this.userService.getById(id).subscribe(data => {
      this.user = data;
    })
}
}
