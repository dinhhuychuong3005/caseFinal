import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignInComponent } from './component/sign-in/sign-in.component';
import { SignUpComponent } from './component/sign-up/sign-up.component';
import { ListUserComponent } from './component/User/list-user/list-user.component';
import { LayoutComponent } from './component/layout/layout.component';
import { NavbarComponent } from './component/blocks/navbar/navbar.component';
import { FooterComponent } from './component/blocks/footer/footer.component';
<<<<<<< HEAD
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
=======
import { ListCCDVComponent } from './component/User/CCDV/list-ccdv/list-ccdv.component';
import {HttpClientModule} from '@angular/common/http';
>>>>>>> d77c3c60ea4a771a0f9dbb970df51d8ef4acb54a


@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    SignUpComponent,
    ListUserComponent,
    LayoutComponent,
    NavbarComponent,
    FooterComponent,
    ListCCDVComponent
  ],
  imports: [
    BrowserModule,
<<<<<<< HEAD
    AppRoutingModule, HttpClientModule, ReactiveFormsModule
=======
    AppRoutingModule,
    HttpClientModule
>>>>>>> d77c3c60ea4a771a0f9dbb970df51d8ef4acb54a
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
