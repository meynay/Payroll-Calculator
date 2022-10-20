import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { PayrollHandlerService } from './payroll-handler.service';
import { Config } from './store/config';
import { Person } from './models/person';
import { Salary } from './models/salary';
import { selectSalary } from './store/payroll.selector';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private service: PayrollHandlerService, private store: Store<Salary>, private store2: Store<Person>) {}

  salary$: Observable<Salary> = this.store.select(selectSalary);

  doCalc(person: Person) {
    this.service.calculateSalary(person, Config);
    console.log(this.salary$);
  }

  ngOnInit() :void {
  }
}
