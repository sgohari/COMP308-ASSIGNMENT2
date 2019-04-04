import { TestBed } from '@angular/core/testing';

import { FavouriteListService } from './favourite-list.service';

describe('FavouriteListService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FavouriteListService = TestBed.get(FavouriteListService);
    expect(service).toBeTruthy();
  });
});
