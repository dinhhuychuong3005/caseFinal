import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SignInComponent} from './component/sign-in/sign-in.component';
import {SignUpComponent} from './component/sign-up/sign-up.component';
import {ListCCDVComponent} from './component/User/CCDV/list-ccdv/list-ccdv.component';
import {DetailCcdvComponent} from './component/User/CCDV/detail-ccdv/detail-ccdv.component';
import {RegisterServiceComponent} from './component/register-service/register-service.component';

const routes: Routes = [
  {
    path: '',
    component: ListCCDVComponent
  },
  {
    path: 'usersCCDV/:id',
    component: DetailCcdvComponent
  },
  {
    path : 'login',
    component : SignInComponent
  },
  {
    path : 'create',
    component : SignUpComponent
  },
  {
    path: 'categoryServices',
    component: RegisterServiceComponent
  }
  ]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
