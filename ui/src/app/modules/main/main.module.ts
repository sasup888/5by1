import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatMenuModule } from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { DrawerComponent } from './components/drawer/drawer.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [
    MainComponent,
    DrawerComponent,
    HeaderComponent,
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatDividerModule,
    MatMenuModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule
  ]
})
export class MainModule { }
