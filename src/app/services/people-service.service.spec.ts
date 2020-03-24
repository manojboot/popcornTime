import { TestBed, inject } from '@angular/core/testing';

import { PeopleServiceService } from './people-service.service';

describe('PeopleServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PeopleServiceService]
    });
  });

  it('should be created', inject([PeopleServiceService], (service: PeopleServiceService) => {
    expect(service).toBeTruthy();
  }));
});
