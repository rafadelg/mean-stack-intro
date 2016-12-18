/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { UsermanagementService } from './usermanagement.service';

describe('Service: Usermanagement', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UsermanagementService]
    });
  });

  it('should ...', inject([UsermanagementService], (service: UsermanagementService) => {
    expect(service).toBeTruthy();
  }));
});
