import { Component } from '@angular/core';
import { ISkillConfig } from './skills';
import { SkillsListViewComponent } from './skills-list-view/skills-list-view.component';

@Component({
  selector: 'app-skills',
  imports: [SkillsListViewComponent],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
  config: ISkillConfig[] = [
    {
      _id: window.crypto.randomUUID(),
      skillset: 'Frontend Developer',
      isHovered: false,
      experience: '2 years of experience',
      expandable: true,
      imgSrc: 'assets/devicon--frontend-developer.svg',
      skills: [
        {
          skill: 'HTML',
          weightage: '80%'
        },
        {
          skill: 'CSS',
          weightage: '80%'
        },
        {
          skill: 'JS',
          weightage: '60%'
        }
      ]
    },
    {
      _id: window.crypto.randomUUID(),
      isHovered: false,
      skillset: 'Frontend Frameworks',
      experience: '2 years of experience',
      expandable: true,
      imgSrc: 'assets/devicon--angular.svg',
      skills: [
        {
          skill: 'Angular',
          weightage: '80%'
        },
        {
          skill: 'React',
          weightage: '20%'
        }
      ]
    },
    {
      _id: window.crypto.randomUUID(),
      isHovered: false,
      skillset: 'Backend Developer',
      experience: '2 years of experience',
      expandable: true,
      imgSrc: 'assets/devicon--visualstudio.svg',
      skills: [
        {
          skill: '.NET',
          weightage: '80%'
        },
        {
          skill: 'Java',
          weightage: '60%'
        }
      ]
    },
  ];
}
