import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { AppNoAuthGuard } from '../../util/app.noauthguard';

const routes: Routes = [
  {
    canActivate: [ AppNoAuthGuard ],
    path: 'login',
    component: LoginComponent
  },
  {
    canActivate: [ AppNoAuthGuard ],
    path: 'signup',
    component: SignupComponent
  }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class AuthRoutingModule { }
