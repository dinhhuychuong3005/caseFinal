import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SignInComponent} from './component/sign-in/sign-in.component';
import {SignUpComponent} from './component/sign-up/sign-up.component';
import {ListCCDVComponent} from './component/User/CCDV/list-ccdv/list-ccdv.component';
import {DetailCcdvComponent} from './component/User/CCDV/detail-ccdv/detail-ccdv.component';
import {RegisterServiceComponent} from './component/service/register-service/register-service.component';
import {HowToUseComponent} from './component/how-to-use/how-to-use.component';
import {PersonalpageComponent} from './component/personalpage/personalpage.component';

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
    path: 'howToUse',
    component: HowToUseComponent
  },
  {
    path: 'me/:id',
    component: PersonalpageComponent
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
