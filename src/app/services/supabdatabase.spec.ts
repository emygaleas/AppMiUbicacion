import { TestBed } from '@angular/core/testing';

import { Supabdatabase } from './supabdatabase';

describe('Supabdatabase', () => {
  let service: Supabdatabase;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Supabdatabase);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
