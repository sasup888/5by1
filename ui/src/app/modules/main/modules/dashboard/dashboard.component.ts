import { AfterViewInit, Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDateRangePicker } from '@angular/material/datepicker';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class DashboardComponent {
  @ViewChild('picker') datePicker: MatDateRangePicker<Date>;

  range = new FormGroup({
    start: new FormControl(new Date()),
    end: new FormControl(new Date())
  });

  constructor() { }

}
