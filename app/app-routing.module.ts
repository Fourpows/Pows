

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path:'',
    loadChildren:'./views/home/home/home.module#HomeModule'
  },
  {
    path:'profile',
    loadChildren:'./views/profile/profile/profile.module#ProfileModule'
  },
  {
    path:'signup',
    loadChildren:'./views/sign-up/sign-up/sign-up.module#SignUpModule'
  },
  {
    path:'login',
    loadChildren:'./views/login/login/login.module#LoginModule'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
