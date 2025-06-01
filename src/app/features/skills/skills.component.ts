import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  imports: [],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {

  isDesignerActive: boolean = false;
  skillsContainer: string[] = [];
  onSkillClick(skill: string){
    this.isDesignerActive = !this.isDesignerActive;
  }

}
