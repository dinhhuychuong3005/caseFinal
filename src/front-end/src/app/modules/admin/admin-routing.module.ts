import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListCCDVComponent} from "../../component/User/CCDV/list-ccdv/list-ccdv.component";
import {PersonalpageComponent} from "../../component/personalpage/personalpage.component";
import {LayoutAdminComponent} from '../../component/admin-component/layout-admin/layout-admin.component';
import {ListUserToCCDVComponent} from '../../component/admin-component/list-user-to-ccdv/list-user-to-ccdv.component';
import {ListUserSystemComponent} from '../../component/admin-component/list-user-system/list-user-system.component';

const routes: Routes = [
  {
    path: 'list-user-to-CCDV',
    component: ListUserToCCDVComponent
  },
  {
    path: 'list-user-system',
    component: ListUserSystemComponent
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
