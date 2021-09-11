import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListCCDVComponent} from "../../component/User/CCDV/list-ccdv/list-ccdv.component";
import {PersonalpageComponent} from "../../component/personalpage/personalpage.component";

const routes: Routes = [
  {
    path: '',
    component: PersonalpageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
