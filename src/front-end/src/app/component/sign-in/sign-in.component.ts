import {Component, OnInit} from '@angular/core';

import {FormControl, FormGroup, Validators} from '@angular/forms';
import {JwtResponse} from '../../models/in-out/jwt-response';
import {AuthService} from '../../service/in-out/auth.service';
import {TokenService} from '../../service/in-out/token.service';
import {Router} from '@angular/router';

import {SignInForm} from '../../models/in-out/sign-in-form';

import {User} from '../../models/user/user';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  // @ts-ignore
  user: User = {};
  signInForm: SignInForm = {};
  loginForm: FormGroup = new FormGroup({
    userName: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  });
  isPassword = 'password';
  isLogin = false;
  status = 'Vui lòng đăng nhập để sử dụng dịch vụ tốt hơn';
  jwtResponse: JwtResponse = {};


  constructor(private authService: AuthService, private tokenService: TokenService, private router: Router) {
  }

  ngOnInit(): void {
  }

  get username(): any {
    return this.loginForm.get('userName');
  }

  get password(): any {
    return this.loginForm.get('password');
  }

  showPass(): void {
    this.isPassword = (this.isPassword === 'password') ? 'text' : 'password';
  }
  check = false;
  login(): void {
    this.signInForm = new SignInForm(this.username.value, this.password.value);
    console.log(this.signInForm);
    this.authService.login(this.signInForm).subscribe(data => {
      if (data.token !== undefined) {
        localStorage.setItem('userName', this.username.value);
        this.isLogin = true;
        this.status = 'Login successfully';
        this.jwtResponse = {

          id: data.id,

          token: data.token,
          name: data.name,
          userName: data.userName,
          roles: data.roles,
        }
        ;
        // @ts-ignore
        console.log(this.jwtResponse.roles[0].authority);
        this.tokenService.setJwt(this.jwtResponse);// @ts-ignore

        console.log('ROLE_ADMIN' === data.roles[0].authority);
        // @ts-ignore
        for (let i = 0; i < data.roles?.length; i++) {
          // @ts-ignore
          if (data.roles[i].authority === 'ROLE_ADMIN') {
            this.check = true;
            this.router.navigate(['admin']).then(() => {
              window.location.reload();

            });
          }
        }
        if (this.check === false) {
          this.router.navigate(['']).then(() => {
            window.location.reload();
          });
        }
      }
// @ts-ignore
//         if (data.roles[0].authority.filter === 'ROLE_ADMIN') {
//
//
//
//         }
//         // @ts-ignore
//         else if ((data.roles[0].authority === 'ROLE_USER') || (data.roles[0].authority === 'ROLE_CCDV')) {
//           this.router.navigate(['']).then(() => {
//             window.location.reload();
//           });
      else {
        this.status = 'Đăng nhập thất bại! Vui lòng thử lại!';
      }

    },error => {
      this.status = 'Đăng nhập thất bại! Vui lòng thử lại!';
    });
  }

}
