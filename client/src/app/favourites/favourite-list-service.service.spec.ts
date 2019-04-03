import { TestBed } from '@angular/core/testing';

import { FavouriteListServiceService } from './favourite-list-service.service';

describe('FavouriteListServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FavouriteListServiceService = TestBed.get(FavouriteListServiceService);
    expect(service).toBeTruthy();
  });
});
