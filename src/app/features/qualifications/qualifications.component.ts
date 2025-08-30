import { Component } from '@angular/core';
import { IQualificationsConfig } from './qualifications';
import { QualificationsTimelineComponent } from './qualifications-timeline/qualifications-timeline.component';
// import { window.crypto.randomUUID } from 'crypto';

@Component({
  selector: 'app-qualifications',
  imports: [QualificationsTimelineComponent],
  templateUrl: './qualifications.component.html',
  styleUrl: './qualifications.component.scss'
})
export class QualificationsComponent {

  config: IQualificationsConfig[] =
    [
      {
        _id: window.crypto.randomUUID(),
        qualificationType: 'Education',
        title: 'Bachelors Of Technology In Information Technology',
        companyOrInstitute: 'Loyola - ICAM College Of Engineering And Technology',
        startYear: '2018',
        endYear: '2022',
        location: 'Chennai, Tamilnadu, India',
        content: 'Comprehensive computer science program covering algorithms, data structures, and maths. Graduated first class in the course and completed a capstone project.',
        skillsLearnt: ['Python', 'Java', 'C++', 'Data Structures', 'Algorithms', 'Maths']
      },
      {
        _id: window.crypto.randomUUID(),
        qualificationType: 'Work',
        title: 'Software Engineer',
        companyOrInstitute: 'Clarium Tech Private Limited',
        startYear: '2023',
        endYear: '2025',
        location: 'Chennai',
        content: 'Full Stack Developer with 2+ years of experience in building scalable web applications using Angular, .NET, Java, SQL, and MongoDB. Currently working at Clarium Tech, delivering cloud-based, secure, and high-performance solutions with a focus on reusable components, scalable APIs, and optimized database queries.',
        skillsLearnt: ['Angular', '.NET Core', '.NET Framework', 'Java', 'Springboot', 'SQL', 'MongoDB', 'TypeScript', 'Microservices', 'Team Leadership', 'Code Review']
      },
      {
        _id: window.crypto.randomUUID(),
        qualificationType: 'Education',
        title: 'Higher Secondary',
        companyOrInstitute: 'St. Marys\'s Anglo Indian Higher Secondary School',
        startYear: '2017',
        endYear: '2018',
        location: 'Chennai, Tamilnadu, India',
        content: 'Acquired intermediate  knowledge in mathematics, physics, chemistry and computer science. Graduated with a grade of 92.4%',
        skillsLearnt: ['Maths', 'Physics', 'Chemistry', 'Computer Science', 'English']
      },
      {
        _id: window.crypto.randomUUID(),
        qualificationType: 'Work',
        title: 'Associate',
        companyOrInstitute: 'Revature',
        startYear: '2022',
        endYear: '2023',
        location: 'Chennai',
        content: 'Revature\'s training program on .NET full- stack is a phenomenal learning ground for any aspiring software developer',
        skillsLearnt: ['Azure', 'C#', '.NET Core', 'SQL', 'Angular', 'Docker', 'DevOps', 'System Architecture', 'Performance Optimization']
      },
      {
        _id: window.crypto.randomUUID(),
        qualificationType: 'Education',
        title: 'Angular & NodeJS - The MEAN Stack Guide [2024 Edition]',
        companyOrInstitute: 'Udemy',
        startYear: '2024',
        endYear: '2024',
        location: 'Online',
        content: 'Professional certification demonstrating expertise in MEAN stack on Udemy. Learnt to build a full stack application using Angular, MongoDb, ExpressJs and NodeJS .Covered best practices for secure, reliable, efficient, and optimized code.',
        skillsLearnt: ['Angular', 'MongoDb', 'NodeJs', 'ExpressJs']
      }
    ];

}
