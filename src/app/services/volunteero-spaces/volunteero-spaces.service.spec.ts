import { TestBed, inject } from '@angular/core/testing';

import { VolunteeroSpacesService } from './volunteero-spaces.service';

describe('VolunteeroSpacesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VolunteeroSpacesService]
    });
  });

  it('should be created', inject([VolunteeroSpacesService], (service: VolunteeroSpacesService) => {
    expect(service).toBeTruthy();
  }));
});
