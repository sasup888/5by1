import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './modules/auth/components/login/login.component';
import { SignupComponent } from './modules/auth/components/signup/signup.component';

import { AppAuthGuard } from './util/app.authguard';
import { AppNoAuthGuard } from './util/app.noauthguard';
import { HTTPInterceptor } from './util/http.interceptor';

const routes: Routes = [
  {
    canActivate: [ AppAuthGuard ],
    path: '',
    loadChildren: () => import('./modules/home/home.module').then((mod) => mod.HomeModule)
  },
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
  imports: [ RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'}) ],
  exports: [ RouterModule ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HTTPInterceptor,
      multi: true
    },
    AppAuthGuard,
    AppNoAuthGuard
  ]
})
export class AppRoutingModule { }
