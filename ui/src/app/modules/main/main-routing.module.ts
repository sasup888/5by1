import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainComponent } from './main.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',  
        redirectTo: 'dashboard'
      },
      {
        path: 'dashboard',
        loadChildren: () => import('./modules/dashboard/dashboard.module').then(mod => mod.DashboardModule)
      },
      {
        path: 'items',
        loadChildren: () => import('./modules/items/items.module').then(mod => mod.ItemsModule)
      },
    ]
  },
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ],
})
export class MainRoutingModule { }
