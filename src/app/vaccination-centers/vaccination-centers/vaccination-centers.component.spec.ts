import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VaccinationCentersComponent } from './vaccination-centers.component';

describe('VaccinationCentersComponent', () => {
  let component: VaccinationCentersComponent;
  let fixture: ComponentFixture<VaccinationCentersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VaccinationCentersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VaccinationCentersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
