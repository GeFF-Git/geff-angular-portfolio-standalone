import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QualificationsTimelineComponent } from './qualifications-timeline.component';

describe('QualificationsTimelineComponent', () => {
  let component: QualificationsTimelineComponent;
  let fixture: ComponentFixture<QualificationsTimelineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QualificationsTimelineComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QualificationsTimelineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
