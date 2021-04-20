import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { ACCESS_TOKEN_ID } from '@shared/Constants';

import { MainService } from '../../services/main.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class HeaderComponent implements OnInit {

  constructor(
    private readonly router: Router,
    private readonly mainService: MainService
  ) { }

  ngOnInit(): void {
  }

  toggleDrawer(): void {
    this.mainService.toggleDrawer();
  }

  logout(): void {
    localStorage.removeItem(ACCESS_TOKEN_ID);
    this.router.navigate([ '/login' ]);
  }

}
