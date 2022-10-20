import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-payroll-result',
  templateUrl: './payroll-result.component.html',
  styleUrls: ['./payroll-result.component.css']
})
export class PayrollResultComponent {
  @Input() salary;
  constructor() { }
}
