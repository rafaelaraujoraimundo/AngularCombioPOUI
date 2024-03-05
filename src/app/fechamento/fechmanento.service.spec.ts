import { TestBed } from '@angular/core/testing';

import { FechmanentoService } from './fechmanento.service';

describe('FechmanentoService', () => {
  let service: FechmanentoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FechmanentoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
