import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QualificationsTimelineItemComponent } from './qualifications-timeline-item.component';

describe('QualificationsTimelineItemComponent', () => {
  let component: QualificationsTimelineItemComponent;
  let fixture: ComponentFixture<QualificationsTimelineItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QualificationsTimelineItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QualificationsTimelineItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
