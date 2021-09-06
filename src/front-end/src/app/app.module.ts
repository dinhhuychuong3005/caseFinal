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
import { RegisterServiceComponent } from './component/service/register-service/register-service.component';
import { UpdatePriceServiceComponent } from './component/service/update-price-service/update-price-service.component';
import { ListServiceRegisterComponent } from './component/service/list-service-register/list-service-register.component';
import {AngularFireStorageModule} from '@angular/fire/storage';
import {environment} from '../environments/environment';
import {AngularFireModule} from '@angular/fire';
// @ts-ignore
import { EditPriceComponent } from './component/service/edit-priceService/edit-price.component';
import { RequestFromUserComponent } from './component/request-from-user/request-from-user.component';
import { HowToUseComponent } from './component/how-to-use/how-to-use.component';
import { ComponentComponent } from './component/component.component';
import { PersonalpageComponent } from './component/personalpage/personalpage.component';



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
    RegisterServiceComponent,
    UpdatePriceServiceComponent,
    ListServiceRegisterComponent,
    EditPriceComponent,
    RequestFromUserComponent,
    HowToUseComponent,
    ComponentComponent,
    PersonalpageComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    ReactiveFormsModule,
    FormsModule,
    AngularFireStorageModule,
    AngularFireModule.initializeApp(environment.firebaseConfig, "cloud")

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
