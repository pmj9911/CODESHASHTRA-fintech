import { TestBed } from '@angular/core/testing';

import { RegistercompanyService } from './registercompany.service';

describe('RegistercompanyService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RegistercompanyService = TestBed.get(RegistercompanyService);
    expect(service).toBeTruthy();
  });
});
