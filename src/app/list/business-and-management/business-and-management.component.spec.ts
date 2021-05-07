import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessAndManagementComponent } from './business-and-management.component';

describe('BusinessAndManagementComponent', () => {
  let component: BusinessAndManagementComponent;
  let fixture: ComponentFixture<BusinessAndManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusinessAndManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessAndManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
