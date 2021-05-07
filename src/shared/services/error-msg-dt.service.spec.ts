import { TestBed } from '@angular/core/testing';

import { ErrorMsgDTService } from './error-msg-dt.service';

describe('ErrorMsgDTService', () => {
  let service: ErrorMsgDTService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ErrorMsgDTService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
