import { Directive, ElementRef, OnDestroy, OnInit, output, signal } from '@angular/core';
import { PortfolioCommonService } from '../services/portfolio-common.service';

@Directive({
  selector: '[appViewport]'
})
export class ViewportDirective implements OnInit,OnDestroy {

  isViewport = output<boolean>();
  private observer !: IntersectionObserver;
  constructor(private el : ElementRef, private portfolioCommonService : PortfolioCommonService) { }
  ngOnInit(): void {
    this.observer = new IntersectionObserver(([entry]) => {
      this.portfolioCommonService.viewportSignal.set('home');
      this.isViewport.emit(entry.isIntersecting);
    },
    {
      root: null, // The viewport,
      rootMargin: '0px', //Margin around the root,
      threshold: 0.0 // the directive to act if any part of the element is visible
    }
  );
  this.observer.observe(this.el.nativeElement);
  }

  ngOnDestroy(): void {
    // this.observer.unobserve(this.el.nativeElement);
    this.observer.disconnect();
  }

}
