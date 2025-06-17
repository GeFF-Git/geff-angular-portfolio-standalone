import { Component, Input, OnInit, input } from '@angular/core';
import { ISkillConfig } from '../skills';
import { SkillItemComponent } from "./skill-item/skill-item.component";

@Component({
  selector: 'app-skills-list-view',
  imports: [SkillItemComponent],
  templateUrl: './skills-list-view.component.html',
  styleUrl: './skills-list-view.component.scss'
})
export class SkillsListViewComponent {
  isDesignerActive = true;
  skillConfig = input<ISkillConfig[]>([]);
  isHovered: boolean = false;
  hoverColor: string = '#FFFFFFCC';
  defaultColor: string = '#6366f1';
  onSkillClick(args: ISkillConfig){
    args.expandable = !args.expandable;
  }
}
