import { Component } from '@angular/core';

import { drawerConfigFactory } from './drawer.config';

@Component({
  selector: 'app-drawer',
  templateUrl: './drawer.component.html',
  styleUrls: ['./drawer.component.scss']
})
export class DrawerComponent {

  drawerConfig = drawerConfigFactory();

}
