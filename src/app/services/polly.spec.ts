import { TestBed } from '@angular/core/testing';

import { Polly } from './polly';

describe('Polly', () => {
  let service: Polly;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Polly);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
