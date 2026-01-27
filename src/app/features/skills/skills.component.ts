import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { UUID } from 'crypto';
import { ISkillConfig } from './skills';
import { SkillsListViewComponent } from './skills-list-view/skills-list-view.component';

@Component({
  selector: 'app-skills',
  imports: [SkillsListViewComponent, CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent implements OnInit {
  config: ISkillConfig[] = [];

  constructor(@Inject(PLATFORM_ID) private platformId: object) { }

  private generateUUID(): UUID {
    if (isPlatformBrowser(this.platformId)) {
      return window.crypto.randomUUID() as UUID;
    }
    // Fallback UUID generation for SSR
    const uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
      const r = Math.random() * 16 | 0;
      const v = c === 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
    return uuid as UUID;
  }

  ngOnInit() {
    this.config = [
      {
        _id: this.generateUUID(),
        skillset: 'Frontend Developer',
        isHovered: false,
        experience: '3+ years of experience',
        expandable: true,
        imgSrc: 'assets/Js_Black.png',
        skills: [
          {
            skill: 'HTML',
            weightage: '85%'
          },
          {
            skill: 'CSS',
            weightage: '85%'
          },
          {
            skill: 'JavaScript',
            weightage: '80%'
          },
          {
            skill: 'TypeScript',
            weightage: '80%'
          }
        ]
      },
      {
        _id: this.generateUUID(),
        isHovered: false,
        skillset: 'Backend Developer',
        experience: '3+ years of experience',
        expandable: true,
        imgSrc: 'assets/devicon--visualstudio.svg',
        skills: [
          {
            skill: 'C#',
            weightage: '85%'
          },
          {
            skill: 'Java',
            weightage: '65%'
          },
          {
            skill: 'Python',
            weightage: '40%'
          },
          {
            skill: 'Node/Express Js',
            weightage: '20%'
          }
        ]
      },
      {
        _id: this.generateUUID(),
        isHovered: false,
        skillset: 'Frameworks & Libraries',
        experience: '3+ years of experience',
        expandable: true,
        imgSrc: 'assets/devicon--angular.svg',
        skills: [
          {
            skill: 'Angular',
            weightage: '85%'
          },
          {
            skill: '.NET Core',
            weightage: '85%'
          },
          {
            skill: '.NET Framework',
            weightage: '60%'
          },
          {
            skill: 'React',
            weightage: '40%'
          }
        ]
      },
      {
        _id: this.generateUUID(),
        isHovered: false,
        skillset: 'Database & Cloud Technologies',
        experience: '3+ years of experience',
        expandable: true,
        imgSrc: 'assets/database.png',
        skills: [
          {
            skill: 'SQL',
            weightage: '80%'
          },
          {
            skill: 'MongoDB',
            weightage: '80%'
          },
          {
            skill: 'Azure',
            weightage: '60%'
          }
        ]
      },
      {
        _id: this.generateUUID(),
        isHovered: false,
        skillset: 'Vibe Coder',
        experience: '1+ years of experience',
        expandable: true,
        imgSrc: 'assets/vibe-coding-icon.png',
        skills: [
          {
            skill: 'Antigravity',
            weightage: '85%'
          },
          {
            skill: 'Cursor',
            weightage: '85%'
          },
          {
            skill: 'Lovable',
            weightage: '80%'
          },
          {
            skill: 'Co-Pilot',
            weightage: '70%'
          },
          {
            skill: 'Bolt',
            weightage: '60%'
          }
        ]
      },
    ];
  }
}
