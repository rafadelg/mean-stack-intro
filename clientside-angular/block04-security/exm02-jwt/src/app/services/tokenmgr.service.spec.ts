/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TokenmgrService } from './tokenmgr.service';

describe('Service: TokenmgrService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TokenmgrService]
    });
  });

  it('should ...', inject([TokenmgrService], (service: TokenmgrService) => {
    expect(service).toBeTruthy();
  }));
});
