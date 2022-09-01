import { TestBed } from '@angular/core/testing';

import { ScrollDetectionService } from 'src/app/shared/services/scroll-detection.service';

describe('ScrollDetectionService', () => {
  let service: ScrollDetectionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScrollDetectionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
