import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListCCDVComponent} from '../../component/User/CCDV/list-ccdv/list-ccdv.component';
import {DetailCcdvComponent} from '../../component/User/CCDV/detail-ccdv/detail-ccdv.component';
import {EditPriceComponent} from '../../component/service/edit-priceService/edit-price.component';
import {RegisterServiceComponent} from '../../component/service/register-service/register-service.component';
import {ListServiceRegisterComponent} from '../../component/service/list-service-register/list-service-register.component';
import {HowToUseComponent} from '../../component/how-to-use/how-to-use.component';
import {PersonalpageComponent} from '../../component/personalpage/personalpage.component';

const routes: Routes = [
  {
    path: '',
    component: ListCCDVComponent
  },
  {
  path: '/home',
  component: ListCCDVComponent
},
  {
    path: 'usersCCDV/:id',
    component: DetailCcdvComponent
  },
  {
    path: 'edit-price',
    component: EditPriceComponent
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
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
