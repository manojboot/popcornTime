import { TestBed, inject } from '@angular/core/testing';

import { ActorDetailsService } from '../actor-details.service';

describe('ActorDetailsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ActorDetailsService]
    });
  });

  it('should be created', inject([ActorDetailsService], (service: ActorDetailsService) => {
    expect(service).toBeTruthy();
  }));
});
