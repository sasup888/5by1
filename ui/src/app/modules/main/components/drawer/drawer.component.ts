import { Component, ViewEncapsulation } from '@angular/core';

import { drawerConfigFactory } from './drawer.config';

@Component({
  selector: 'app-drawer',
  templateUrl: './drawer.component.html',
  styleUrls: ['./drawer.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class DrawerComponent {

  drawerConfig = drawerConfigFactory();
}
