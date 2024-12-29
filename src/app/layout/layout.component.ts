import { AfterViewInit, Component, Inject, PLATFORM_ID } from '@angular/core';
import { HeaderComponent } from '../features/header/header.component';
import { HomePageComponent } from '../features/home-page/home-page.component';
import { AboutComponent } from "../features/about/about.component";
import { EducationComponent } from "../features/education/education.component";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import _gsap from 'gsap/gsap-core';
import { isPlatformBrowser } from '@angular/common';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-layout',
  imports: [HeaderComponent, HomePageComponent, AboutComponent, EducationComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
})
export class LayoutComponent implements AfterViewInit {
  constructor(@Inject(PLATFORM_ID) private platformId : object){}
  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      gsap.defaults({ease: 'none', duration: 100});
      gsap.registerPlugin(ScrollTrigger);
      gsap.utils.toArray('#section-container').forEach((section : any) => {
        let tl = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: 'end end',
            end: () => "+=" + (section.offsetWidth),
            pin: true,
            scrub: true,
            anticipatePin: 1,
            markers: true
          }
        });
        tl
        .fromTo(section.querySelector(".about-section"), { xPercent: 0, x: 0}, {xPercent: 0}, "+=3")
          // ...and the image the opposite way (at the same time)
        .fromTo(section.querySelector(".skills-section"), {xPercent: 0, x: 0}, {xPercent: -100}, "+=10")
        // .fromTo(section.querySelector(".projects-section"), {xPercent: -100, x: 0}, {xPercent: -200}, "+=10");
      });
    }
  }

}
