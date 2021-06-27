import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VaccinationControlsFormComponent } from './vaccination-controls-form.component';

describe('VaccinationControlsFormComponent', () => {
  let component: VaccinationControlsFormComponent;
  let fixture: ComponentFixture<VaccinationControlsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VaccinationControlsFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VaccinationControlsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
