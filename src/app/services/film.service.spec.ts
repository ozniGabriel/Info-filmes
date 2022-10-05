import { TestBed } from '@angular/core/testing';

import { Film.ServiceService } from './film.service.service';

describe('Film.ServiceService', () => {
  let service: Film.ServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Film.ServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
