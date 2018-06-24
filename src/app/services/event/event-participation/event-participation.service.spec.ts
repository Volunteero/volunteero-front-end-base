import { TestBed, inject } from '@angular/core/testing';

import { EventParticipationService } from './event-participation.service';

describe('EventParticipationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EventParticipationService]
    });
  });

  it('should be created', inject([EventParticipationService], (service: EventParticipationService) => {
    expect(service).toBeTruthy();
  }));
});
