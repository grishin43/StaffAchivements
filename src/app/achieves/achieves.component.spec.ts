import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AchievesComponent } from './achieves.component';

describe('AchievesComponent', () => {
  let component: AchievesComponent;
  let fixture: ComponentFixture<AchievesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AchievesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AchievesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
