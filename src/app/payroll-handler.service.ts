import { Injectable,OnInit } from '@angular/core';
import { Salary } from './models/salary';
import { Person } from './models/person';
import { Store } from '@ngrx/store';
import { PayrollAction } from './store/payroll.action';


@Injectable({
  providedIn: 'root'
})
export class PayrollHandlerService {
  constructor(private store: Store<Salary>) { }
  
  calculateSalary(person: Person, Config: any) {
    this.store.dispatch(PayrollAction({ person: person, Config: Config}));
  }
}
