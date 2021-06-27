import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VaccinationCentersFormComponent } from './vaccination-centers-form.component';

describe('VaccinationCentersFormComponent', () => {
  let component: VaccinationCentersFormComponent;
  let fixture: ComponentFixture<VaccinationCentersFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VaccinationCentersFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VaccinationCentersFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
