import { Component, input } from '@angular/core';
import { ISkill } from '../../skills';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skill-item',
  imports: [CommonModule],
  templateUrl: './skill-item.component.html',
  styleUrl: './skill-item.component.scss'
})
export class SkillItemComponent {
  skillItem = input<ISkill[]>([]);
}
