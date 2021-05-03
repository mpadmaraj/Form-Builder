import { TestBed } from '@angular/core/testing';

import { StaticPagesService } from './static-pages.service';

describe('StaticPagesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StaticPagesService = TestBed.get(StaticPagesService);
    expect(service).toBeTruthy();
  });
});
