import { AfterViewInit, Component, Inject, PLATFORM_ID } from '@angular/core';
import { HomePageComponent } from '../features/home-page/home-page.component';
import { AboutComponent } from "../features/about/about.component";
import { EducationComponent } from "../features/education/education.component";
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import _gsap from 'gsap/gsap-core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-layout',
  imports: [HomePageComponent, AboutComponent, EducationComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
})
export class LayoutComponent implements AfterViewInit {
  constructor(@Inject(PLATFORM_ID) private platformId : object, private breakPointObserver : BreakpointObserver){}
  ngAfterViewInit(): void {
    this.breakPointObserver.observe([
      Breakpoints.Web,
      Breakpoints.Tablet
    ])
    .subscribe({
      next:(isWeb) => {
        if (isWeb.matches && isPlatformBrowser(this.platformId)) {
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
                markers: true,
              }
            });
            tl
            .fromTo(section.querySelector(".about-section"), { xPercent: 0, x: 0}, {xPercent: 0}, "+=3")
              // ...and the image the opposite way (at the same time)
            .fromTo(section.querySelector(".skills-section"), {xPercent: 0, x: 0}, {xPercent: -100}, "+=10")
            // .add(() => gsap.set(section))
            // .fromTo(section.querySelector(".projects-section"), {xPercent: -100, x: 0}, {xPercent: -200}, "+=10");
          });
        }
      }
    })
  }

}
