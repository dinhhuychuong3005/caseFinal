import {Component, OnInit} from '@angular/core';
import {JwtResponse} from '../../../models/in-out/jwt-response';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  // @ts-ignore
  jwt: JwtResponse = localStorage.getItem('jwtResponse');
hidden = true;
  constructor() {
  }

  ngOnInit(): void {
    this.checktoken();
    console.log(this.jwt);
    console.log(this.hidden);
  }

  // tslint:disable-next-line:typedef
  logout() {
    localStorage.removeItem('jwtResponse');
    window.location.reload();
  }

  // tslint:disable-next-line:typedef
  checktoken() {
    if (this.jwt == null) {
      this.hidden = false;
    }
  }


}
