import { trigger, transition, style, animate, state } from '@angular/animations';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { AfterViewInit, Component, ElementRef, Inject, NgZone, OnDestroy, OnInit, PLATFORM_ID, ViewChild } from '@angular/core';
// gsap.registerPlugin(ScrollTrigger);
@Component({
  selector: 'app-home-page',
  imports: [CommonModule],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
  animations: [trigger('fadeIn', [
    state('noAnimation',
      style ({
        opacity: 1,
        transform: "translateY(0)"
      })
    ),
    state('animate', style({
      opacity: 1,
      transform: 'translateY(0)'
    })),
    transition('void => animate', [
        style({ opacity: 0, transform: 'translateY(2rem)' }),
        animate('600ms ease-in', style({ opacity: 1, transform: 'translateY(0)' }))
    ]),
    transition('animate => void', [
        // style({opacity : 0, transform : 'translateY(-2rem)'}),
        animate('600ms ease-out', style({ opacity: 0, transform: 'translateY(-0.5rem)' })),
    ]),
])
],
})
export class HomePageComponent implements AfterViewInit,OnInit,OnDestroy {
  constructor(@Inject(PLATFORM_ID) private platformId : object, private ngZone : NgZone){}

  strings : string[] = ['A Frontend Developer', 'A Backend Developer', 'A Photographer', 'A Traveller'];
  skills : string[] = [];
  currentIndex = 0;
  currentSkill : string = 'Loading...';
  interval !: NodeJS.Timeout;
  timeout !: NodeJS.Timeout;
  isShowText = true;
  shouldFadeIn  = false;
  @ViewChild('scrollContainer', { static: true }) scrollContainer !: ElementRef;
  @ViewChild('scrollContent', { static: true }) scrollContent!: ElementRef;
  @ViewChild('sectionContainer', { static: true }) sectionContainer !: ElementRef;

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
    setTimeout(() => {
      this.shouldFadeIn = true;
    }, 2000);
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

    // const scrollContainer = this.scrollContainer.nativeElement;
    // const scrollContent = this.scrollContent.nativeElement;

    // Get the total width of the scrollable content
    // const contentWidth = scrollContainer.scrollWidth;
    // const viewportWidth = window.innerWidth;
    // gsap.defaults({ease: 'none', duration: 2, x: ''});
    // const sectionContainer = ''
    // gsap.utils.toArray<HTMLElement>(this.sectionContainer).forEach((panel, i) => {
    //   ScrollTrigger.create({
    //     trigger: panel,
    //     start: "top top",
    //     pin: true,
    //     pinSpacing: false
    //   })
    // });
    // const tl = gsap.timeline();
    // tl.from("#about", {xPercent: 0})
    // .from("#skills", {xPercent: 0})
    // .from("#projects", {xPercent: 0})


    // // Create ScrollTrigger
    // ScrollTrigger.create({
    //   animation: tl,
    //   trigger: scrollContainer,
    //   start: "top top",
    //   end: () => `+=${contentWidth}`,
    //   scrub: true,
    //   pin: true,
    //   anticipatePin: 1
    // })

    // Set up the ScrollTrigger
    // gsap.to(scrollContainer, {
    //   x: -(contentWidth - viewportWidth), // Move content to the left
    //   ease: 'none',
    //   scrollTrigger: scroll
    // });
    // if (isPlatformBrowser(this.platformId)) {
    //   const sectionContainer = this.sectionContainer.nativeElement;
    //   const scrollContainer = this.scrollContainer.nativeElement;

    //   const totalWidth = sectionContainer.scrollWidth - scrollContainer.offsetWidth;
    //   gsap.to(sectionContainer, {
    //     // x: () => -totalWidth, // Move the container left as user scrolls vertically
    //     x: () => -totalWidth,
    //     ease: 'none',
    //     scrollTrigger: ScrollTrigger.create({
    //       trigger: scrollContainer,
    //       start: 'top top',
    //       end: () => `+=${sectionContainer.scrollWidth}`, // End when the horizontal scroll is complete
    //       scrub: true,
    //       pin: true, // Pins the container during the scroll
    //     }),
    //   });
    // }
