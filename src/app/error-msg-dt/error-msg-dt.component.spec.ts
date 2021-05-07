import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorMsgDTComponent } from './error-msg-dt.component';

describe('ErrorMsgDTComponent', () => {
  let component: ErrorMsgDTComponent;
  let fixture: ComponentFixture<ErrorMsgDTComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ErrorMsgDTComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorMsgDTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
