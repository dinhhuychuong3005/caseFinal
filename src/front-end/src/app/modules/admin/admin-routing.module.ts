import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListCCDVComponent} from "../../component/User/CCDV/list-ccdv/list-ccdv.component";
import {PersonalpageComponent} from "../../component/personalpage/personalpage.component";
import {ListUserSystemComponent} from '../../component/admin-component/list-user-system/list-user-system.component';
import {NavbarAdminComponent} from '../../component/admin-component/navbar-admin/navbar-admin.component';
import {LayoutAdminComponent} from '../../component/admin-component/layout-admin/layout-admin.component';
import * as path from 'path';
import {RentAdminPageComponent} from '../../component/admin-component/rent-admin-page/rent-admin-page.component';
import {AdminCategoryComponent} from '../../component/admin-component/admin-category/admin-category.component';


const routes: Routes = [
  {
    path: '',
    component: ListUserSystemComponent
  },
  {path : 'rentAdmin',
    component : RentAdminPageComponent},
  {path : 'categoryAdmin',
  component : AdminCategoryComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
