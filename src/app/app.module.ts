import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { PayrollFormComponent } from './payroll-form/payroll-form.component';
import { PayrollResultComponent } from './payroll-result/payroll-result.component';
import { PayrollHandlerService } from './payroll-handler.service';

@NgModule({
  declarations: [
    AppComponent,
    PayrollFormComponent,
    PayrollResultComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [PayrollHandlerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
