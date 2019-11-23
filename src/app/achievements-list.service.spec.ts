import { TestBed } from '@angular/core/testing';

import { AchievementsListService } from './achievements-list.service';

describe('AchievementsListService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AchievementsListService = TestBed.get(AchievementsListService);
    expect(service).toBeTruthy();
  });
});
