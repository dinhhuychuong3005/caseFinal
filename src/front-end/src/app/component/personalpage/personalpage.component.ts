import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {UserService} from '../../service/user/user.service';
import {ActivatedRoute, Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {User} from '../../models/user/user';
import {City} from '../../models/city';
import {JwtResponse} from '../../models/in-out/jwt-response';
import {AngularFireStorage, AngularFireStorageReference} from '@angular/fire/storage';
import {ImgService} from '../../service/image/img.service';
import {DatePipe, formatDate} from '@angular/common';
import {Img} from '../../models/image/img';

@Component({
  selector: 'app-personalpage',
  templateUrl: './personalpage.component.html',
  styleUrls: ['./personalpage.component.css']
})
export class PersonalpageComponent implements OnInit {
// @ts-ignore
  name: string;
  pw = localStorage.getItem('pw');
  // @ts-ignore
  jwt: JwtResponse = JSON.parse(localStorage.getItem('jwtResponse'));
  // @ts-ignore
  selectedFile: File = {};
  // @ts-ignore
  ref: AngularFireStorageReference;
  // @ts-ignore
  downloadURL: string;
  checkUploadFile = false;
  id1 = 0;
// @ts-ignore
  user1: User = {};
  @Output()
  givenURLtoCreate = new EventEmitter<string>();
  city: City[] = [];
  // @ts-ignore
  user: User = {};
// @ts-ignore
  id: number;

  userForm: FormGroup = new FormGroup({
    password: new FormControl(),
    userName: new FormControl(),
    email: new FormControl(),
    phoneNumber: new FormControl(),
    name: new FormControl(),
    dateOfBirth: new FormControl(),
    gender: new FormControl(),
    city: new FormControl(),
    nationality: new FormControl(),
    height: new FormControl(''),
    weight: new FormControl(),
    hobby: new FormControl(''),
    description: new FormControl(),
    requestToPayer: new FormControl(),
    linkFb: new FormControl(),
    // createAt: new FormControl(),
    // createAtCCDV: new FormControl(),
    // statusCCDV: new FormControl(),
    price: new FormControl(),
  });

  constructor(private userService: UserService, private activateRoute: ActivatedRoute, private router: Router,
              private angularFireStore: AngularFireStorage, private img: ImgService) {

  }

  onUpload(): void {
    this.checkUploadFile = true;
    // tslint:disable-next-line:prefer-for-of

    const name = this.selectedFile.name;
    this.ref = this.angularFireStore.ref(name);
    this.ref.put(this.selectedFile)
      .then(snapshot => {
        return snapshot.ref.getDownloadURL();
      })
      .then(downloadURL => {
        this.downloadURL = downloadURL;
        this.user.avatar = downloadURL;

        console.log(this.downloadURL);
        this.checkUploadFile = false;
      })
      .catch(error => {
        console.log(`Failed to upload avatar and get link ${error}`);
      });


    console.log(this.downloadURL);
    this.givenURLtoCreate.emit(this.downloadURL);

  }

  onFileChange($event: Event): void {
    // @ts-ignore
    this.selectedFile = $event.target.files[0];
    this.onUpload();
  }


  update() {
console.log(this.user, this.jwt.id)
// @ts-ignore
    this.userService.updateAvt(this.jwt.id, this.user).subscribe(data => {
      window.location.reload();
    });
  }
  getByImageId(id:number){
    this.img.findImgById(id).subscribe(data =>{

    })
  }

  ngOnInit(): void {
    this.activateRoute.paramMap.subscribe((paramMap) => {
      // @ts-ignore
      this.id = +paramMap.get(`id`);
      this.getUserById(this.id);
    });
    this.infoUser(this.id);
    this.getCity();
    console.log(this.Name);
  }

  getUserById(id: number) {
    this.userService.getById(id).subscribe(data => {
      const date = new Date(data.dateOfBirth);


      this.userForm = new FormGroup({
        email: new FormControl(data.email, [Validators.required, Validators.pattern(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)]),
        phoneNumber: new FormControl(data.phoneNumber, [Validators.required, Validators.pattern(/^\+84\d{9}$/)]),
        name: new FormControl(data.name, [Validators.required, Validators.pattern(/^[a-z]{1}[a-z0-9. _-]{3,15}$/)]),
        dateOfBirth: new FormControl(data.dateOfBirth),
        gender: new FormControl(data.gender),
        city: new FormControl(data.city),
        nationality: new FormControl(data.nationality, Validators.required),
        height: new FormControl(data.height),
        weight: new FormControl(data.weight),
        hobby: new FormControl(data.hobby),
        description: new FormControl(data.description),
        requestToPayer: new FormControl(data.requestToPayer),
        linkFb: new FormControl(data.linkFb),
        price: new FormControl(data.price),
      });
      // this.userForm.patchValue(data);
      // console.log(data.linkFb);
    });
  }

  saveUser(id: number) {
    // if (this.userForm.value.name === null) {
    //   this.userForm.value.name = '';
    // }
    const user1 = this.userForm.value;
    console.log(user1);
    console.log(this.userForm.value.name, this.userForm.value.linkFb, this.userForm.value.nationality);
    this.userService.saveUser(id, user1).subscribe(data => {
      console.log('ok');
      console.log(data.linkFb);
      console.log(data.name);
      window.location.reload();
    });
    console.error();
  }

  infoUser(id: number) {
    this.userService.getById(id).subscribe(data => {

      this.user = {
        avatar: data.avatar,
        city: data.city,
        createAt: data.createAt,
        createAtCCDV: data.createAtCCDV,
        dateOfBirth: data.dateOfBirth,
        description: data.description,
        email: data.email,
        gender: data.gender,
        height: data.height,
        hobby: data.hobby,
        linkFb: data.linkFb,
        name: data.name,
        nationality: data.nationality,
        password: data.password,
        phoneNumber: data.phoneNumber,
        price: data.price,
        requestToPayer: data.requestToPayer,
        statusCCDV: data.statusCCDV,
        statusUs: data.statusUs,
        userName: data.userName,
        weight: data.weight,
        id: data.id
      };

    });
  }

  getCity() {
    this.userService.getListCity().subscribe(data => {
      // @ts-ignore
      this.city = data;
    });
  }


  get Name(): any {
    return this.userForm.get('name');
  }

  changeStatusCCDV() {
    this.userService.changeStatus(this.id).subscribe(data => {
      // @ts-ignore
      this.user = data;
    });
    console.error();
      }

  savePriceUser(){
    // @ts-ignore
    let price = document.getElementById('editprice').value;
    if(price==0 || price == ''){
      price = 70000;
    }
    // @ts-ignore
    this.userService.savePriceUser(this.jwt.id,price).subscribe(data =>{
      console.log(data)
      window.location.reload()
    })

  }
  ListImageUser : Img [] = [];
  getImageByUserId(){
    // @ts-ignore
    this.img.getImgByIdUs(this.jwt.id).subscribe(data =>{
      this.ListImageUser = data;
      console.log(data)
    })
  }



  upImage(){

  }
  onUploadImage(): void {
    this.checkUploadFile = true;
    // tslint:disable-next-line:prefer-for-of

    const name = this.selectedFile.name;
    this.ref = this.angularFireStore.ref(name);
    this.ref.put(this.selectedFile)
      .then(snapshot => {
        return snapshot.ref.getDownloadURL();
      })
      .then(downloadURL => {
        this.downloadURL = downloadURL;
        this.user.avatar = downloadURL;

        console.log(this.downloadURL);
        this.checkUploadFile = false;
      })
      .catch(error => {
        console.log(`Failed to upload avatar and get link ${error}`);
      });


    console.log(this.downloadURL);
    this.givenURLtoCreate.emit(this.downloadURL);

  }

  onFileChangeImage($event: Event): void {
    // @ts-ignore
    this.selectedFile = $event.target.files[0];
    this.onUploadImage();
  }


}
