import { TestBed } from '@angular/core/testing';

import { ForecaseService } from './forecase.service';

describe('ForecaseService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ForecaseService = TestBed.get(ForecaseService);
    expect(service).toBeTruthy();
  });
});
