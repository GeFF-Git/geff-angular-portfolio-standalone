import { trigger, transition, style, animate } from '@angular/animations';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, ElementRef, Inject, NgZone, PLATFORM_ID, ViewChild } from '@angular/core';

@Component({
  selector: 'app-about',
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
    animations: [trigger('fadeIn', [
      transition(':enter', [
          style({ opacity: 0, transform: 'translateY(2rem)' }),
          animate('600ms ease-in', style({ opacity: 1, transform: 'translateY(0)' }))
      ]),
      transition(':leave', [
          // style({opacity : 0, transform : 'translateY(-2rem)'}),
          animate('600ms ease-out', style({ opacity: 0, transform: 'translateY(-0.1rem)' })),
      ]),
  ])
  ],
})
export class AboutComponent {
  constructor(@Inject(PLATFORM_ID) private platformId : object, private ngZone : NgZone){}

  strings : string[] = ['a ui-developer', 'an api-developer', 'a photographer'];
  skills : string[] = [];
  currentIndex = 0;
  currentSkill : string = 'Geoffrey';
  interval !: NodeJS.Timeout;
  timeout !: NodeJS.Timeout;
  isShowText = true;
  @ViewChild('scrollContainer', {static: true}) scrollContainer !: ElementRef;
  @ViewChild('scrollContent', { static: true }) scrollContent!: ElementRef;
  @ViewChild('sectionContainer', {static: true}) sectionContainer !: ElementRef;

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.loadSKills();
    }
  }
  ngAfterViewInit(): void {
    // if (isPlatformBrowser(this.platformId)) {
    //   gsap.defaults({ease: 'none', duration: 100});
    //   gsap.registerPlugin(ScrollTrigger);
    //   gsap.utils.toArray('#section-container').forEach((section : any) => {
    //     let tl = gsap.timeline({
    //       scrollTrigger: {
    //         trigger: section,
    //         start: 'end end',
    //         end: () => "+=" + (section.offsetWidth),
    //         pin: true,
    //         scrub: true,
    //         anticipatePin: 1,
    //         markers: true
    //       }
    //     });
    //     tl
    //     .fromTo(section.querySelector(".about-section"), { xPercent: 0, x: 0}, {xPercent: 0}, "+=3")
    //       // ...and the image the opposite way (at the same time)
    //     .fromTo(section.querySelector(".skills-section"), {xPercent: 0, x: 0}, {xPercent: -100}, "+=10")
    //     .fromTo(section.querySelector(".projects-section"), {xPercent: -100, x: 0}, {xPercent: -200}, "+=10");
    //   });
    // }
  }

  loadSKills(){
    setInterval(() => {
      this.isShowText = false;
      this.timeout = setTimeout(() => {
        this.currentSkill = this.strings[this.currentIndex];
        this.isShowText = true; // Re-add the text to DOM, triggering animation
        this.currentIndex = (this.currentIndex + 1) % this.strings.length;
      }, 200); // Short delay to ensure the DOM re-renders
    }, 2000);
  }

  ngOnDestroy(): void {
    clearInterval(this.interval);
    clearTimeout(this.timeout);
  }
}
