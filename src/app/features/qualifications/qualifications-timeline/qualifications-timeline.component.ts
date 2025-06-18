import { CommonModule } from '@angular/common';
import { Component, NgZone, OnInit, inject, input } from '@angular/core';
import { IQualificationsConfig } from '../qualifications';
import { QualificationsTimelineItemComponent } from './qualifications-timeline-item/qualifications-timeline-item.component';

@Component({
  selector: 'app-qualifications-timeline',
  imports: [CommonModule, QualificationsTimelineItemComponent],
  templateUrl: './qualifications-timeline.component.html',
  styleUrl: './qualifications-timeline.component.scss'
})
export class QualificationsTimelineComponent implements OnInit {

  qualificationsConfig = input<IQualificationsConfig[]>([]);
  educationConfig: IQualificationsConfig[] = [];
  workConfig: IQualificationsConfig[] = [];
  activeTab: string = 'Work';
  animateItems: boolean = false;
  ngZone = inject(NgZone);

  ngOnInit(): void {
    this.educationConfig = this.qualificationsConfig().filter(education => education.qualificationType === 'Education').sort((a, b) => Number(b.startYear) - Number(a.startYear));
    this.workConfig = this.qualificationsConfig().filter(work => work.qualificationType === 'Work').sort((a, b) => Number(b.startYear) - Number(a.startYear));
    this.ngZone.runOutsideAngular(() => {
      setTimeout(() => {
        this.animateItems = true;
      }, 100);
    });
  }

  setActiveTab(tab: 'Work' | 'Education') {
    if (this.activeTab !== tab) {
      this.activeTab = tab;
      this.animateItems = false;
      this.ngZone.runOutsideAngular(() => {
        setTimeout(() => {
          this.animateItems = true;
        }, 50);
      });
    }
  }
}
