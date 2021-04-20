import { Component } from '@angular/core';

import { MainService } from './services/main.service';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {

  drawerOpened: boolean;

  constructor(
    private readonly mainService: MainService
  ) {
    this.mainService.drawerOpenedSubject.subscribe(
      drawerOpened => {
      this.drawerOpened = drawerOpened;
      }
    );
  }

}
