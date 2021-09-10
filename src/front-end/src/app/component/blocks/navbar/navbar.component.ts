import {Component, OnInit} from '@angular/core';
import {JwtResponse} from '../../../models/in-out/jwt-response';
import {User} from '../../../models/user/user';
import {UserService} from '../../../service/user/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  // @ts-ignore
  jwt: JwtResponse = JSON.parse(localStorage.getItem('jwtResponse'));
  hidden = true;
  // @ts-ignore
  user: User = {};
  userName = localStorage.getItem('userName');


  constructor(private userService: UserService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.checktoken();
    // @ts-ignore
    this.getById(this.jwt.id)
    console.log(this.jwt);
    console.log(this.jwt.userName)
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
  getById(id: number) {
    this.userService.getById(id).subscribe( data => {
      this.user = data;
    })
  }
  reloadHome() {



    this.router.navigate(['']);

    // window.location.reload();
  }

}
