import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VaccinationControlsComponent } from './vaccination-controls.component';

describe('VaccinationControlsComponent', () => {
  let component: VaccinationControlsComponent;
  let fixture: ComponentFixture<VaccinationControlsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VaccinationControlsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VaccinationControlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
