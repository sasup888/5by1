import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { DrawerComponent } from './components/drawer/drawer.component';

@NgModule({
  declarations: [
    MainComponent,
    DrawerComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    MatSidenavModule,
    MatListModule
  ]
})
export class MainModule { }
