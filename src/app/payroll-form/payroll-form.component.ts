import { Component, OnInit } from '@angular/core';
import { PayrollHandlerService } from '../payroll-handler.service';
import { Person } from '../person';

@Component({
  selector: 'app-payroll-form',
  templateUrl: './payroll-form.component.html',
  styleUrls: ['./payroll-form.component.css']
})
export class PayrollFormComponent implements OnInit {
  private person: Person = 
  {
    years:0,
    job:'Dev',
    city:'Teh',
    year:'1400'
  };
  
  constructor(private service: PayrollHandlerService) { }
  // saving each info while user entering
  change_years(event: any){
    this.person.years = event.target.value;
  }

  change_job(event: any) {
    this.person.job = event.target.value;
  }

  change_city(event: any) {
    this.person.city = event.target.value;
  }

  change_year(event: any) {
    this.person.year = event.target.value;
  }

  doThat() {
    this.service.calculateSalary(this.person);
  }
  
  ngOnInit(): void {
  }

}
