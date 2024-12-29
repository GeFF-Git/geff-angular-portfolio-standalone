import { TestBed } from '@angular/core/testing';

import { PortfolioCommonService } from './portfolio-common.service';

describe('PortfolioCommonService', () => {
  let service: PortfolioCommonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PortfolioCommonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
