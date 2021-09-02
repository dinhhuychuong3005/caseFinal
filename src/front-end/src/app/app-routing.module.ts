import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListCCDVComponent} from './component/User/CCDV/list-ccdv/list-ccdv.component';

const routes: Routes = [
  {
    path: 'usersCCDV/list',
    component: ListCCDVComponent
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
