import { TestBed } from '@angular/core/testing';

import { VaccinationControlsService } from './vaccination-controls.service';

describe('VaccinationControlsService', () => {
  let service: VaccinationControlsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VaccinationControlsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
