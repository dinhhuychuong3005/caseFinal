import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {SignInComponent} from './component/sign-in/sign-in.component';
import {SignUpComponent} from './component/sign-up/sign-up.component';
import {ListUserComponent} from './component/User/list-user/list-user.component';
import {LayoutComponent} from './component/layout/layout.component';
import {NavbarComponent} from './component/blocks/navbar/navbar.component';
import {FooterComponent} from './component/blocks/footer/footer.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ListCCDVComponent} from './component/User/CCDV/list-ccdv/list-ccdv.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { DetailCcdvComponent } from './component/User/CCDV/detail-ccdv/detail-ccdv.component';
import { RegisterServiceComponent } from './component/register-service/register-service.component';


@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    SignUpComponent,
    ListUserComponent,
    LayoutComponent,
    NavbarComponent,
    FooterComponent,
    ListCCDVComponent,
    DetailCcdvComponent,
    RegisterServiceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
