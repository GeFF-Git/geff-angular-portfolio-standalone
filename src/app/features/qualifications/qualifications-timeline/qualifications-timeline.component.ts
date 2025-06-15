import { Component } from '@angular/core';

@Component({
  selector: 'app-qualifications-timeline',
  imports: [],
  templateUrl: './qualifications-timeline.component.html',
  styleUrl: './qualifications-timeline.component.scss'
})
export class QualificationsTimelineComponent {
  activeTab: string = 'Work';
  setActiveTab(args: 'Work' | 'Education'){}
}
