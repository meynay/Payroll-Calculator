import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { PayrollFormComponent } from './payroll-form/payroll-form.component';
import { PayrollResultComponent } from './payroll-result/payroll-result.component';
import { StoreModule } from '@ngrx/store';
import { PayrollReducer } from './store/payroll.reducer';
import { FeatureKey } from './store/payroll.selector';

@NgModule({
  declarations: [
    AppComponent,
    PayrollFormComponent,
    PayrollResultComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    StoreModule.forRoot({ [FeatureKey]: PayrollReducer })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
