import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {LayoutRoutingModule} from './layout-routing.module';
import {ListUserComponent} from '../../component/User/list-user/list-user.component';
import {LayoutComponent} from '../../component/layout/layout.component';
import {ListCCDVComponent} from '../../component/User/CCDV/list-ccdv/list-ccdv.component';
import {DetailCcdvComponent} from '../../component/User/CCDV/detail-ccdv/detail-ccdv.component';
import {RegisterServiceComponent} from '../../component/service/register-service/register-service.component';
import {UpdatePriceServiceComponent} from '../../component/service/update-price-service/update-price-service.component';
import {ListServiceRegisterComponent} from '../../component/service/list-service-register/list-service-register.component';
import {EditPriceComponent} from '../../component/service/edit-priceService/edit-price.component';
import {RequestFromUserComponent} from '../../component/request-from-user/request-from-user.component';
import {HowToUseComponent} from '../../component/how-to-use/how-to-use.component';
import {PersonalpageComponent} from '../../component/personalpage/personalpage.component';
import {RentdetailComponent} from '../../component/rentdetail/rentdetail.component';

import {HttpClientModule} from '@angular/common/http';
import {NgxPaginationModule} from 'ngx-pagination';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NavbarComponent} from '../../component/blocks/navbar/navbar.component';
import {FooterComponent} from '../../component/blocks/footer/footer.component';
import {MessageComponent} from '../../component/message/message.component';


@NgModule({
  declarations: [
    ListUserComponent,
    LayoutComponent,
    NavbarComponent, FooterComponent,
    ListCCDVComponent,
    DetailCcdvComponent,
    RegisterServiceComponent,
    UpdatePriceServiceComponent,
    ListServiceRegisterComponent,
    EditPriceComponent,
    RequestFromUserComponent,
    HowToUseComponent,
    MessageComponent,
    PersonalpageComponent,
    RentdetailComponent
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    ReactiveFormsModule,
    FormsModule,

    NgbModule,
  ]
})
export class LayoutModule {
}
