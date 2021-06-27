import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DistributorsFormComponent } from './distributors-form.component';

describe('DistributorsFormComponent', () => {
  let component: DistributorsFormComponent;
  let fixture: ComponentFixture<DistributorsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DistributorsFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DistributorsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
