import { Component, OnInit } from '@angular/core';
import {SignUpForm} from '../../models/in-out/sign-up-form';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../service/in-out/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  signUpForm: SignUpForm = {};

  status = 'Please fill in the form to register!';
  error1 = {
    message: 'This username is existed'
  };
  error2 = {
    message: 'This email is existed'
  };

  success = {
    message: 'Register successfully'
  };
  registerForm: FormGroup = new FormGroup({
    userName: new FormControl('', [Validators.required, Validators.minLength(6)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    phoneNumber: new FormControl('', [Validators.required, Validators.pattern(/^\+84\d{9}$/)]),
    password: new FormControl('', [Validators.required,
      Validators.pattern(new RegExp('^(?=.*[A-Za-z])(?=.*\\d)(?=.*[@$!%*#?&])[A-Za-z\\d@$!%*#?&]{8,20}$'))]),
    confirmedPassword: new FormControl('', [Validators.required])
    // 123456!a
  });
  isPassword = 'password';
  isConfirmedPassword = 'password';
  isRegistered = false;

  get username(): any {
    return this.registerForm.get('userName');
  }

  get email(): any {
    return this.registerForm.get('email');
  }get phoneNumber(): any {
    return this.registerForm.get('phoneNumber');
  }

  get password(): any {
    return this.registerForm.get('password');
  }

  get confirmedPassword(): any {
    return this.registerForm.get('confirmedPassword');
  }
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }
  register(): void {
    this.signUpForm = new SignUpForm( this.username.value, this.password.value, this.email.value, this.phoneNumber.value);
    console.log(this.signUpForm);
    this.authService.register(this.signUpForm).subscribe(data => {
      if (JSON.stringify(data) === JSON.stringify(this.error1)) {
        this.status = 'The username is existed! Please try again!';
      }
      if (JSON.stringify(data) === JSON.stringify(this.error2)) {
        this.status = 'The email is existed! Please try again!';
      }
      if (JSON.stringify(data) === JSON.stringify(this.success)) {
        this.isRegistered = true;
        this.status = 'You are registered successfully, you can login right now';
      }
    });
  }
  showPass(): void {
    this.isPassword = (this.isPassword === 'password') ? 'text' : 'password';
  }

  showConfirmedPass(): void {
    this.isConfirmedPassword = (this.isConfirmedPassword === 'password') ? 'text' : 'password';
  }

}
