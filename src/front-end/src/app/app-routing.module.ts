import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SignInComponent} from './component/sign-in/sign-in.component';
import {SignUpComponent} from './component/sign-up/sign-up.component';
import {ListCCDVComponent} from './component/User/CCDV/list-ccdv/list-ccdv.component';
import {DetailCcdvComponent} from './component/User/CCDV/detail-ccdv/detail-ccdv.component';
import {RegisterServiceComponent} from './component/service/register-service/register-service.component';
import {HowToUseComponent} from './component/how-to-use/how-to-use.component';
import {PersonalpageComponent} from './component/personalpage/personalpage.component';

import {ListServiceRegisterComponent} from './component/service/list-service-register/list-service-register.component';
// @ts-ignore
import {EditPriceComponent} from "./component/service/edit-priceService/edit-price.component";

import {LayoutComponent} from './component/layout/layout.component';




const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    loadChildren: () => import('./modules/layout/layout.module').then(module => module.LayoutModule)
  },
  {
    path: 'admin',
    loadChildren: () => import('./modules/admin/admin.module').then(module => module.AdminModule)
  },


  {
    path: 'login',
    component: SignInComponent
  },
  {
    path: 'create',
    component: SignUpComponent
  },








];


@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
