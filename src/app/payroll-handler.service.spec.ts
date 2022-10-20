import { TestBed } from '@angular/core/testing';

import { PayrollHandlerService } from './payroll-handler.service';

describe('PayrollHandlerService', () => {
  let service: PayrollHandlerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PayrollHandlerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
