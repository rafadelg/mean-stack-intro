/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MockusermanagementService } from './mockusermanagement.service';

describe('Service: Mockusermanagement', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MockusermanagementService]
    });
  });

  it('should ...', inject([MockusermanagementService], (service: MockusermanagementService) => {
    expect(service).toBeTruthy();
  }));
});
