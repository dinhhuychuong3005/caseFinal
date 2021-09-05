import { Component, OnInit } from '@angular/core';
import {categoryService} from '../../../models/categoryService/categoryService';
import {CategoryServiceService} from '../../../service/service/category-service.service';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {UserServiceService} from '../../../service/user-service/user-service.service';
import {JwtResponse} from '../../../models/in-out/jwt-response';
import {UserService} from '../../../service/user/user.service';
import {User} from '../../../models/user/user';
import {IuserService} from '../../../models/userService/Iuser-service';


@Component({
  selector: 'app-register-service',
  templateUrl: './register-service.component.html',
  styleUrls: ['./register-service.component.css']
})
export class RegisterServiceComponent implements OnInit {
  listServiceShow: categoryService[] = [];
  listServiceSelect: categoryService[] = [];
  // @ts-ignore
  service:FormGroup;
  serviceFormGroup: FormGroup;

  listUserService: IuserService[] = [];

  // @ts-ignore
  jwt: JwtResponse = JSON.parse(localStorage.getItem('jwtResponse'));
  // @ts-ignore
  user: User = {};


  constructor(private categoryService: CategoryServiceService,
              private formBuilder: FormBuilder,
              private userService: UserServiceService,
              private us: UserService
              ) {
    this.serviceFormGroup = this.formBuilder.group({
      services: this.formBuilder.array([], [Validators.required]),
    })
  }

  ngOnInit(): void {
    this.getAll();
  }
  getAll() {
    this.categoryService.getAll().subscribe(data => {
      this.listServiceShow = data;
    })
  }
  onCheckboxChange(e: any) {
    const service: FormArray = this.serviceFormGroup.get('services') as FormArray;
    if (e.target.checked) {
      service.push(new FormControl(e.target.value));
    } else {
      const index = service.controls.findIndex(x => x.value === e.target.value);
      service.removeAt(index);
    }
  }
  submit(){
    console.log(this.serviceFormGroup.value.services);
  }
  getById(id: number) {
    const idUs = this.jwt.id;
    // @ts-ignore
    this.us.getById(idUs).subscribe(user => {
      this.user = user;
    });
    // @ts-ignore
    let user_Service: IuserService;
      this.categoryService.getById(id).subscribe(data => {
        user_Service = {service: data, user: this.user}
      // @ts-ignore
      this.service = data
      this.userService.create(user_Service).subscribe(() => {
      })
      this.listServiceSelect.push(data)
      console.log(this.listServiceSelect)
    })
  }


  // Lấy list dịch vụ đã đăng kí
  getListService() {
    for (let i = 0; i < this.serviceFormGroup.value.services.length; i++) {
      // @ts-ignore
      this.getById(this.serviceFormGroup.value.services[i])
    }
  }


  getUserServiceByUserId(idUser: number) {
    this.userService.findByUserId(idUser).subscribe(list => {
      // @ts-ignore
      this.listUserService = list;
    })
  }

  onSubmitPrice(id: number, name: string, price: number, typeService: string) {
    const service = {id: id, name: name, typeService: typeService}
    // @ts-ignore
    this.categoryService.updatePrice(id, service).subscribe(() => {
      alert('Đã cập nhật thành công');
      // this.router.navigate(['/books/list']);
    });
  }

}
