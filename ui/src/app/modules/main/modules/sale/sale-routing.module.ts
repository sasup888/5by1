import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SaleComponent } from './sale.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: SaleComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SaleRoutingModule { }
