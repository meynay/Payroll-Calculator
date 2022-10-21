import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Config } from './store/config';
import { Person } from './models/person';
import { Salary } from './models/salary';
import { selectSalary } from './store/payroll.selector';
import { PayrollAction } from './store/payroll.action'; 


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private store: Store<Salary>, private store2: Store<Person>) {}

  salary$: Observable<Salary> = this.store.select(selectSalary);

  doCalc(person: Person) {
    this.store.dispatch(PayrollAction({ person: person, Config: Config}));
  }

  ngOnInit() :void {
  }
}
