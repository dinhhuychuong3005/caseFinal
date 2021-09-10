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
import {EditPriceComponent} from './component/service/edit-priceService/edit-price.component';
import {RentByCCDVComponent} from './component/rent-by-ccdv/rent-by-ccdv.component';
import {RentBySDDVComponent} from './component/rent-by-sddv/rent-by-sddv.component';


const routes: Routes = [
  {
    path: 'edit-price',
    component: EditPriceComponent
  },
  {
    path: '',
    component: ListCCDVComponent
  },
  {
    path: 'usersCCDV/:id',
    component: DetailCcdvComponent
  },
  {
    path: 'login',
    component: SignInComponent
  },
  {
    path: 'create',
    component: SignUpComponent
  },
  {
    path: 'categoryServices',
    component: RegisterServiceComponent
  },
  {
    path: 'categoryService/listRegister',
    component: ListServiceRegisterComponent
  },
  {
    path: 'howToUse',
    component: HowToUseComponent
  },
  {
    path: 'me/:id',
    component: PersonalpageComponent
  },
  {
    path : 'userCCDV/:id',
    component : RentByCCDVComponent
  },{
    path : 'userSDDV/:id',
    component : RentBySDDVComponent
  },


];


@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
