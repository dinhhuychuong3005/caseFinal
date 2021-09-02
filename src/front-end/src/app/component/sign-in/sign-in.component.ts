import {Component, OnInit} from '@angular/core';
import {SignInForm} from '../../models/in-out/sign-in-form';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {JwtResponse} from '../../models/in-out/jwt-response';
import {AuthService} from '../../service/in-out/auth.service';
import {TokenService} from '../../service/in-out/token.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  signInForm: SignInForm = {};
  loginForm: FormGroup = new FormGroup({
    userName: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  });
  isPassword = 'password';
  isLogin = false;
  status = 'Please fill in the form to login!';
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
  login(): void {
    this.signInForm = new SignInForm(this.username.value, this.password.value);
    console.log(this.signInForm);
    this.authService.login(this.signInForm).subscribe(data => {
      if (data.token !== undefined) {
        this.isLogin = true;
        this.status = 'Login successfully';
        this.jwtResponse = {
          token: data.token,
          name: data.name,
          userName : data.userName,
          roles: data.roles,
        };
        this.tokenService.setJwt(this.jwtResponse);
        // this.router.navigate(['']).then(() => {
        //   window.location.reload();
        // });
        alert('suceess');
      } else {
        this.status = 'Login failed! Please try again!';
      }

    });
    alert('login');
  }

}
