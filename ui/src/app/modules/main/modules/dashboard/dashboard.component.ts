import { Component, OnDestroy, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDateRangePicker } from '@angular/material/datepicker';
import { BreakpointObserver } from '@angular/cdk/layout';
import { Subscription } from 'rxjs';

enum CustomBreakPoints {
  LG = '(max-width: 1200px)',
  MD = '(max-width: 1024px)',
  SM = '(max-width: 768px)'
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class DashboardComponent implements OnInit, OnDestroy {
  @ViewChild('picker') datePicker: MatDateRangePicker<Date>;
  private $subscription: Subscription;
  gridLayout = {
    totalScores: 3,
    pieCharts: 2,
    scores: 3,
    gutter: '40px'
  };

  range = new FormGroup({
    start: new FormControl(new Date()),
    end: new FormControl(new Date())
  });

  constructor(private readonly breakpointObserver: BreakpointObserver) { }

  ngOnInit(): void {
    this.$subscription = this.breakpointObserver.observe([CustomBreakPoints.LG, CustomBreakPoints.MD]).subscribe(({breakpoints}) => {
      if (breakpoints[CustomBreakPoints.MD]) {
        this.gridLayout = {
          totalScores: 1,
          pieCharts: 1,
          scores: 1,
          gutter: '20px'
        };
      } else if (breakpoints[CustomBreakPoints.MD]) {
        this.gridLayout = {
          totalScores: 1,
          pieCharts: 1,
          scores: 1,
          gutter: '40px'
        };
      } else if (breakpoints[CustomBreakPoints.LG]) {
        this.gridLayout = {
          totalScores: 2,
          pieCharts: 2,
          scores: 2,
          gutter: '40px'
        };
      } else {
        this.gridLayout = {
          totalScores: 3,
          pieCharts: 2,
          scores: 3,
          gutter: '40px'
        };
      }
    });
  }

  ngOnDestroy(): void {
    if (this.$subscription) {
      this.$subscription.unsubscribe();
    }
  }
}
