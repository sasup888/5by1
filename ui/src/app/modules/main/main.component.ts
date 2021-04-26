import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component } from '@angular/core';

import { MainService } from './services/main.service';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  mobileQuery: MediaQueryList;
  drawerOpened = false;

  private _mobileQueryListener: () => void;

  constructor(
    private readonly mainService: MainService,
    private readonly changeDetectorRef: ChangeDetectorRef, private readonly media: MediaMatcher
  ) {
    this.mainService.drawerOpenedSubject.subscribe(
      drawerOpened => {
      this.drawerOpened = drawerOpened;
      }
    );

    this.mobileQuery = this.media.matchMedia('(max-width: 768px)');
    this._mobileQueryListener = () => this.changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

}
