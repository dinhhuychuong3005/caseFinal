import {Component, OnInit} from '@angular/core';
import {JwtResponse} from '../../../models/in-out/jwt-response';
import {User} from '../../../models/user/user';
import {UserService} from '../../../service/user/user.service';
import {Router} from '@angular/router';
import {RentService} from "../../../service/rent/rent.service";

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
  listUser: User[] = [];

  constructor(private userService: UserService,
              private rentService: RentService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.checktoken();
    // @ts-ignore
    this.getById(this.jwt.id)
    this.showTop6();
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
    this.userService.getById(id).subscribe(data => {
      this.user = data;
    })
  }

  reloadHome() {


    this.router.navigate(['']);

    // window.location.reload();
  }

  showTop6() {
    this.rentService.showTop6().subscribe(data => {
      for (let i = 0; i < data.length; i++) {
        // @ts-ignore
        this.userService.getById(data[i].user.id).subscribe(data1 => {
          this.listUser.push(data1);
        })
      }
    })
  }
}
