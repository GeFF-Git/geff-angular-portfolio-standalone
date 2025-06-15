import { Component, Input, OnInit, input } from '@angular/core';
import { ISkillConfig } from '../skills';
import { SkillItemComponent } from "./skill-item/skill-item.component";

@Component({
  selector: 'app-skills-list-view',
  imports: [SkillItemComponent],
  templateUrl: './skills-list-view.component.html',
  styleUrl: './skills-list-view.component.scss'
})
export class SkillsListViewComponent implements OnInit {
  ngOnInit(): void {
    console.log(this.skillConfig);
  }
  isDesignerActive = true;
  skillConfig = input<ISkillConfig[]>([]);
  onSkillClick(args: ISkillConfig){
    args.expandable = !args.expandable;
  }
}
