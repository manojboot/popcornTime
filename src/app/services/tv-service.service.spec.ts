import { TestBed, inject } from '@angular/core/testing';

import { TvServiceService } from './tv-service.service';

describe('TvServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TvServiceService]
    });
  });

  it('should be created', inject([TvServiceService], (service: TvServiceService) => {
    expect(service).toBeTruthy();
  }));
});
