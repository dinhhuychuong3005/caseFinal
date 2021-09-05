import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {categoryService} from '../../../models/categoryService/categoryService';
import {CategoryServiceService} from '../../../service/service/category-service.service';
import {FormArray, FormBuilder, FormControl, FormGroup, ValidatorFn, Validators} from '@angular/forms';


@Component({
  selector: 'app-register-service',
  templateUrl: './register-service.component.html',
  styleUrls: ['./register-service.component.css']
})
export class RegisterServiceComponent implements OnInit {
  listServiceShow: categoryService[] = [];
  listServiceSelect: categoryService[] = [];
  listTest: string[] = ['phong gay', 'phong kute'];
  // @ts-ignore
  service:FormGroup;
  serviceFormGroup: FormGroup;

  // @ts-ignore
  serviceFormSelect: FormGroup = new FormGroup({
    name: new FormControl(),
    price: new FormControl(),
    typeService: new FormControl(),
  })

  constructor(private categoryService: CategoryServiceService,
              private formBuilder: FormBuilder,
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
    this.categoryService.getById(id).subscribe(data => {
      // @ts-ignore
      this.service = data
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

  // // Các hàm sửa giá dịch vụ
  // getServiceSelectById(id: number) {
  //   this.categoryService.getById(id).subscribe( service => {
  //     this.serviceFormSelect.patchValue(service);
  //   })
  // }
  //
  // getServiceSelect() {
  //   for (let i = 0; i < this.serviceFormGroup.value.services.length; i++) {
  //     this.getServiceSelectById(this.serviceFormGroup.value.services[i].id);
  //   }
  // }

}
