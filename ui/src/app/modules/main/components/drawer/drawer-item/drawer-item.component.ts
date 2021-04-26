import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DrawerConfigItem } from '../drawer.config';

@Component({
  selector: 'app-drawer-item',
  templateUrl: './drawer-item.component.html',
  styleUrls: ['./drawer-item.component.scss'],
})
export class DrawerItemComponent implements OnInit {
  expanded = false;
  @HostBinding('attr.aria-expanded') ariaExpanded = this.expanded;
  @Input() configItem: DrawerConfigItem;
  @Input() depth: number;

  constructor(public router: Router) {
    if (this.depth === undefined) {
      this.depth = 0;
    }
  }

  ngOnInit(): void {}

  onItemSelected(item: DrawerConfigItem): void {
    if (!item.children || !item.children.length) {
      // this.router.navigate([item.path]);
      // this.navService.closeNav();
    }
    if (item.children && item.children.length) {
      this.expanded = !this.expanded;
    }
  }
}
