import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SignInComponent} from './component/sign-in/sign-in.component';
import {SignUpComponent} from './component/sign-up/sign-up.component';
import {LayoutAdminComponent} from './component/admin-component/layout-admin/layout-admin.component';
import {LayoutComponent} from './component/layout/layout.component';
import {VipCCDVlistComponent} from './component/vip-ccdvlist/vip-ccdvlist.component';




const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    loadChildren: () => import('./modules/layout/layout.module').then(module => module.LayoutModule)
  },
  {
    path: 'admin',

    component: LayoutAdminComponent,

    loadChildren: () => import('./modules/admin/admin.module').then(module => module.AdminModule)
  },
  {
    path: 'login',
    component: SignInComponent
  },
  {
    path: 'create',
    component: SignUpComponent
  },{
  path : 'vip',
    component : VipCCDVlistComponent
  }

]

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
// @ts-ignore
export class AppRoutingModule {
}
