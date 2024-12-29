import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PortfolioCommonService {
  newSignal = signal('');
  viewportSignal = signal('');
  constructor() { }
}
