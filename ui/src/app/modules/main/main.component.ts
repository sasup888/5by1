import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ACCESS_TOKEN_ID } from '@shared/Constants';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {

  constructor(private router: Router) { }

  logout(): void {
    localStorage.removeItem(ACCESS_TOKEN_ID);
    this.router.navigate([ '/login' ]);
  }

}
