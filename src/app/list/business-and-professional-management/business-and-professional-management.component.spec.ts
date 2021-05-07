import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessAndProfessionalManagementComponent } from './business-and-professional-management.component';

describe('BusinessAndProfessionalManagementComponent', () => {
  let component: BusinessAndProfessionalManagementComponent;
  let fixture: ComponentFixture<BusinessAndProfessionalManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusinessAndProfessionalManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessAndProfessionalManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
