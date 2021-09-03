import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {AngularFireStorage, AngularFireStorageReference} from '@angular/fire/storage';
import {ImgService} from '../../../service/image/img.service';
import {User} from '../../../models/user/user';
import {JwtResponse} from '../../../models/in-out/jwt-response';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  // @ts-ignore
  jwt: JwtResponse = JSON.parse(localStorage.getItem('jwtResponse'));
  selectedFile: File[] = [];
  // @ts-ignore
  ref: AngularFireStorageReference;
  downloadURL: string[] = [];
  checkUploadFile = false;
  id = 0;
// @ts-ignore
  user: User = {};
  @Output()
  givenURLtoCreate = new EventEmitter<string[]>();
  constructor( private angularFireStore: AngularFireStorage, private img: ImgService) { }

  ngOnInit(): void {
  }
  onFileChange($event: Event): void {
    // @ts-ignore
    this.selectedFile = $event.target.files;
  }

  onUpload(): void {
    this.checkUploadFile = true;
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < this.selectedFile.length; i++) {
      const name = this.selectedFile[i].name;
      this.ref = this.angularFireStore.ref(name);
      this.ref.put(this.selectedFile[i])
        .then(snapshot => {
          return snapshot.ref.getDownloadURL();
        })
        .then(downloadURL => {
          this.downloadURL.push(downloadURL);
          this.user.avatar = downloadURL;

          console.log(this.downloadURL);
          this.checkUploadFile = false;
        })
        .catch(error => {
          console.log(`Failed to upload avatar and get link ${error}`);
        });

    }
    console.log(this.downloadURL);
    this.givenURLtoCreate.emit(this.downloadURL);

  }

  update() {


// @ts-ignore
    this.userService.updateAvt(this.jwt.id,this.user).subscribe(data =>{
      alert("ok");
    })
  }
}
