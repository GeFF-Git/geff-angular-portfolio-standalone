import { AfterViewChecked, AfterViewInit, Component, ElementRef, Inject, PLATFORM_ID, Renderer2, viewChild } from '@angular/core';
import { HomePageComponent } from '../features/home-page/home-page.component';
import { AboutComponent } from "../features/about/about.component";
import { BreakpointObserver } from '@angular/cdk/layout';
import { SkillsComponent } from "../features/skills/skills.component";
import { QualificationsComponent } from '../features/qualifications/qualifications.component';
import { FooterComponent } from '../features/footer/footer.component';

@Component({
  selector: 'app-layout',
  imports: [HomePageComponent, AboutComponent, SkillsComponent, QualificationsComponent, FooterComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
})
export class LayoutComponent implements AfterViewInit,AfterViewChecked {
  sections = viewChild<ElementRef>('sectionsContainer');
  constructor(@Inject(PLATFORM_ID) private platformId : object, private breakPointObserver : BreakpointObserver, private renderer : Renderer2){}
  ngAfterViewChecked(): void {
    // console.log(this.sections);
  }
  ngAfterViewInit(): void {
    // this.breakPointObserver.observe([
    //   Breakpoints.Web,
    //   Breakpoints.Tablet
    // ])
    // .subscribe({
    //   next:(isWeb) => {
    //     if (isWeb.matches && isPlatformBrowser(this.platformId)) {
    //       gsap.defaults({ease: 'none', duration: 100});
    //       gsap.registerPlugin(ScrollTrigger);
    //       gsap.utils.toArray('.more-sections').forEach((section : any, index : number, sections: any) => {
    //         let i = 0;
    //         // while (i < (sections[0].children as HTMLCollection).length) {
    //         //   const val = (sections[0].children as HTMLCollection).item(i);
    //         //   console.log(val);
    //         //   i++;
    //         // }
    //         console.log(sections.length);
    //         while (i < (sections[0].childNodes as NodeList).length) {
    //           const val = (sections[0].children as NodeList).item(i);
    //           console.log(val);
    //           i++;
    //         }
    //         let tl = gsap.timeline({
    //           scrollTrigger: {
    //             trigger: section,
    //             start: 'start start',
    //             end: () => "+100px",// + (section.offsetWidth),
    //             pin: true,
    //             scrub: 0.5,
    //             anticipatePin: 1,
    //             markers: true,
    //             pinSpacing: true,
    //             fastScrollEnd: true,
    //             // onEnter: () => this.setActive(section, index),
    //             // onLeave: () => this.clearActive(section, index),
    //             // onEnterBack: () => this.setActive(section, index),
    //             // onLeaveBack: () => this.clearActive(section, index),
    //             // onToggle: (self) => {
    //             //   if (self.isActive) this.setActive(section, index);
    //             //   else this.clearActive(section, index);
    //             // }
    //           }
    //         });
    //         tl
    //         .fromTo(section.querySelector(".about-section"), { xPercent: 0, x: 0, opacity: 1, zIndex: 1}, {xPercent: 0, opacity: 0, zIndex: 0, ease: 'back.in'}, "+=10")
    //           // ...and the image the opposite way (at the same time)
    //         .fromTo(section.querySelector(".skills-section"), {xPercent: -50, x: 0, opacity: 0, zIndex: 0, duration: 0.5, ease: 'bounce.in'}, {xPercent: -100, opacity: 1, zIndex: 1, ease: 'circ.inOut' })
    //         // .add(() => gsap.set(section))
    //         // .fromTo(section.querySelector(".projects-section"), {xPercent: -100, x: 0}, {xPercent: -200}, "+=10");
    //       });
    //     }
    //   }
    // });
    // let container = document.querySelector('.container');
    // let sections = document.querySelectorAll('.panel');
    // gsap.to(sections, {
    //   xPercent: -100 * (sections.length - 1),
    //   ease: "none",
    //   scrollTrigger: {
    //     trigger: '.panel-content',
    //     start: 'start start',
    //     pin: true,
    //     scrub: true,
    //     end: '+=3500'
    //   }
    // })
  }

  setActive(section: HTMLElement, index : number) {
    console.log('setActive', section, section.childNodes);
    // section.classList.add('active');
    this.renderer.addClass(section.children[0], 'active');
    section.style.zIndex = '1'; // Bring the active section to the front
  }
  
  clearActive(section: HTMLElement, index : number) {
    console.log('clearActive', section.offsetWidth, section.childNodes);
    // this.renderer.addClass(section.childNodes[index], 'active');
    this.renderer.removeClass(section.children[0], 'active');
    // section.classList.remove('active');
    section.style.zIndex = '0'; // Send inactive sections to the back
  }
}
