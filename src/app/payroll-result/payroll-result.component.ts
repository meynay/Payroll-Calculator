import { Component, OnInit } from '@angular/core';
import { PayrollHandlerService } from '../payroll-handler.service';

@Component({
  selector: 'app-payroll-result',
  templateUrl: './payroll-result.component.html',
  styleUrls: ['./payroll-result.component.css']
})
export class PayrollResultComponent implements OnInit {

  constructor(private service: PayrollHandlerService) { }

  ngOnInit(): void {
  }
  public salary = this.service.getSalary();
}
