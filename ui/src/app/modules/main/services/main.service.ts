import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  drawerOpenedSubject = new BehaviorSubject(true);

  toggleDrawer(): void {
    this.drawerOpenedSubject.next(!this.drawerOpenedSubject.value);
  }
}
