/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { JsonAccessService } from './json-access.service';

describe('Service: JsonAccess', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [JsonAccessService]
    });
  });

  it('should ...', inject([JsonAccessService], (service: JsonAccessService) => {
    expect(service).toBeTruthy();
  }));
});
