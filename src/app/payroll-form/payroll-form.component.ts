import { Component, EventEmitter, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-payroll-form',
  templateUrl: './payroll-form.component.html',
  styleUrls: ['./payroll-form.component.css']
})
export class PayrollFormComponent implements OnInit {
  @Output() submitButton = new EventEmitter<any>();
  constructor() { }
  ngOnInit(): void {
  }

}
