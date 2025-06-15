import { Component } from '@angular/core';
import { IQualificationsConfig } from './qualifications';
import { QualificationsTimelineComponent } from './qualifications-timeline/qualifications-timeline.component';

@Component({
  selector: 'app-qualifications',
  imports: [QualificationsTimelineComponent],
  templateUrl: './qualifications.component.html',
  styleUrl: './qualifications.component.scss'
})
export class QualificationsComponent {

  config: IQualificationsConfig[] = [];
}
