import { TestBed } from '@angular/core/testing';

import { VaccinationCentersService } from './vaccination-centers.service';

describe('VaccinationCentersService', () => {
  let service: VaccinationCentersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VaccinationCentersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
