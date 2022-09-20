import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Payroll-Calculator';
  constructor() {}
  private years: number = 0;
  private job: string = 'Dev';
  private city: string = 'Teh';
  private year: string = '0';
  public base: number = 0;
  public bonus: number = 0;
  public gross: number = 0;
  public tax: number = 0;
  public high_tax: number = 0;
  public total_tax: number = 0;
  public net: number = 0;

  // saving each info while user entering
  change_years(event: any){
    this.years = event.target.value;
  }

  change_job(event: any) {
    this.job = event.target.value;
  }

  change_city(event: any) {
    this.city = event.target.value;
  }

  change_year(event: any) {
    this.year = event.target.value;
  }

  calculate_salary() {
    //base Salary for jobs applied
    if (this.job == 'Dev')
    {
      this.base = 30000;
    }
    else if (this.job == 'Tcr')
    {
      this.base = 27000;
    }
    else {
      this.base = 25000;
    }
    //bonus Salary depended on years of experience
    if (this.years >= 11)
    {
      this.bonus = this.base * 0.6;
    }
    else if (this.years >= 8)
    {
      this.bonus = this.base * 0.4;
    }
    else if (this.years >= 4)
    {
      this.bonus = this.base * 0.2;
    }
    //Gross Salary
    this.gross = this.base + this.bonus;
    //Applying tax rate depended on city and year
    if (this.city == 'Teh')
    {
      if (this.year == '0')
      {
        this.tax = this.gross * 0.3;
      }
      else 
      {
        this.tax = this.gross * 0.29;
      }
    }
    else 
    {
      if (this.year == '0')
      {
        this.tax = this.gross * 0.25;
      }
      else 
      {
        this.tax = this.gross * 0.22;
      }
    }

    //applying high income tax
    if (this.gross > 45000)
    {
      let temp: number = this.gross - 45000;
      //4500 is 50% tax of Salary between 36000-45000
      this.high_tax = 4500 + (temp * 0.7);
    }
    else if (this.gross > 36000)
    {
      let temp: number = this.gross - 36000;
      this.high_tax = temp * 0.5;
    }
    //total tax
    this.total_tax = this.tax + this.high_tax;

    //net income
    this.net = this.gross - this.total_tax;
  }
}
