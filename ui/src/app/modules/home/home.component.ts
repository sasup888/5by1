import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ACCESS_TOKEN_ID } from '@shared/Constants';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: [ './home.component.scss' ]
})
export class HomeComponent {

  constructor(private router: Router) { }

  logout(): void {

    localStorage.removeItem(ACCESS_TOKEN_ID);
    this.router.navigate([ '/login' ]);

  }

}
