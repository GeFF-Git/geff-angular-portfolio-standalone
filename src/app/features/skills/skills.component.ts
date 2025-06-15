import { Component } from '@angular/core';
import { SkillsListViewComponent } from './skills-list-view/skills-list-view.component';
import { ISkillConfig } from './skills';

@Component({
  selector: 'app-skills',
  imports: [SkillsListViewComponent],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
  config: ISkillConfig[] = [
    {
      skillset: 'Frontend Developer',
      experience: '2 years of experience',
      expandable: true,
      imgSrc: './../../../../assets/devicon--swagger (1).svg',
      skills: [
        {
          skill: 'HTML',
          weightage: '70%'
        },
        {
          skill: 'CSS',
          weightage: '90%'
        }
      ]
    },
    {
      skillset: 'Frontend Frameworks',
      experience: '2 years of experience',
      expandable: true,
      imgSrc: './../../../../assets/devicon--angular.svg',
      skills: [
        {
          skill: 'Angular',
          weightage: '80%'
        },
        {
          skill: 'React',
          weightage: '30%'
        }
      ]
    },
    {
      skillset: 'Backend Developer',
      experience: '2 years of experience',
      expandable: true,
      imgSrc: './../../../../assets/devicon--visualstudio.svg',
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
