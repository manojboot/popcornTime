import { TestBed, inject } from '@angular/core/testing';

import { TvshowsDetailService } from './tvshows-detail.service';

describe('TvshowsDetailService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TvshowsDetailService]
    });
  });

  it('should be created', inject([TvshowsDetailService], (service: TvshowsDetailService) => {
    expect(service).toBeTruthy();
  }));
});
