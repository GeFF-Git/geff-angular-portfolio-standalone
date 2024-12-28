import { Component } from '@angular/core';
import { HeaderComponent } from '../features/header/header.component';
import { HomePageComponent } from '../features/home-page/home-page.component';
import { AboutComponent } from "../features/about/about.component";
import { EducationComponent } from "../features/education/education.component";

@Component({
  selector: 'app-layout',
  imports: [HeaderComponent, HomePageComponent, AboutComponent, EducationComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
})
export class LayoutComponent {

}
