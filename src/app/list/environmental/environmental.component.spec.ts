import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnvironmentalComponent } from './environmental.component';

describe('EnvironmentalComponent', () => {
  let component: EnvironmentalComponent;
  let fixture: ComponentFixture<EnvironmentalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnvironmentalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnvironmentalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
