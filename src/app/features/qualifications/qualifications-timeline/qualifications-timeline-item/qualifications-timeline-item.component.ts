import { Component, NgZone, effect, inject, input } from '@angular/core';
import { IQualificationsConfig } from '../../qualifications';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-qualifications-timeline-item',
  imports: [CommonModule],
  templateUrl: './qualifications-timeline-item.component.html',
  styleUrl: './qualifications-timeline-item.component.scss'
})
export class QualificationsTimelineItemComponent {
  animateItemsInput = input<boolean>(false);
  ngZone = inject(NgZone);
  constructor(){
    effect(() => {
      console.log(this.qualificationsConfig(), this.animateItemsInput());   
    })
  }
  ngOnInit(): void {
    // Trigger animations after component loads
    this.ngZone.runOutsideAngular(() => {
      setTimeout(() => {
        this.animateItems = true;
      }, 100);
    })
  }
  qualificationsConfig = input<IQualificationsConfig[]>([]);

  animateItems = false;
}
