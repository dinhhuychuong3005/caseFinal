import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import {ListUserToCCDVComponent} from '../../component/admin-component/list-user-to-ccdv/list-user-to-ccdv.component';
import {LayoutAdminComponent} from '../../component/admin-component/layout-admin/layout-admin.component';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {NgxPaginationModule} from 'ngx-pagination';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AngularFireStorageModule} from '@angular/fire/storage';
import {AngularFireModule} from '@angular/fire';
import {environment} from '../../../environments/environment';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {LayoutRoutingModule} from '../layout/layout-routing.module';
import {NavbarAdminComponent} from '../../component/admin-component/navbar-admin/navbar-admin.component';


@NgModule({
  declarations: [
    LayoutAdminComponent,
    NavbarAdminComponent,
    ListUserToCCDVComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule,
  ]
})
export class AdminModule { }
