import { Injectable } from '@angular/core';
import { Config } from './config';
import { Bonus } from './bonus-salary';
import { CalculateHighIndexTax } from './calculate-high-index-tax';
import { Person } from './person';

@Injectable({
  providedIn: 'root'
})
export class PayrollHandlerService {
  
  constructor() { }

  private salary = {
    'base': 0,
    'bonus': 0,
    'gross': 0,
    'tax': 0,
    'highTax': 0,
    'totalTax': 0,
    'net': 0
  };

  calculateSalary(person: Person) {
    this.salary['base'] = Config['baseSalary'][person.job];
    this.salary['bonus'] = this.salary['base'] * Bonus(person.years);
    this.salary['gross'] = this.salary['base'] + this.salary['bonus'];
    if (this.salary['gross'] <= 36000)
    {
      this.salary['tax'] = this.salary['gross'] * Config['taxRate'][person.year][person.city];
    }
    else
    {
      this.salary['tax'] = 36000 * Config['taxRate'][person.year][person.city];
    }
    this.salary['highTax'] = CalculateHighIndexTax(this.salary['gross']);
    this.salary['totalTax'] = this.salary['tax'] + this.salary['highTax'];
    this.salary['net'] = this.salary['gross'] - this.salary['totalTax'];
  }

  getSalary() {
    return this.salary;
  }
}
