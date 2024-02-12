import { TestBed } from '@angular/core/testing';

import { OnboardingCheckGuard } from './onboarding-check.guard';

describe('OnboardingCheckGuard', () => {
  let guard: OnboardingCheckGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(OnboardingCheckGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
