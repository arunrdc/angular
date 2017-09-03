import { TestBed, inject } from '@angular/core/testing';

import { ModelDetailServiceService } from './model-detail-service.service';

describe('ModelDetailServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ModelDetailServiceService]
    });
  });

  it('should be created', inject([ModelDetailServiceService], (service: ModelDetailServiceService) => {
    expect(service).toBeTruthy();
  }));
});
