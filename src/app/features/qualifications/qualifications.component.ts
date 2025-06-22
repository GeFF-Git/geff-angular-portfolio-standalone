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
        companyOrInstitute: 'Google',
        startYear: '2022',
        endYear: '2024',
        location: 'Mountain View, CA',
        content: 'Developed and maintained large-scale web applications serving millions of users. Collaborated with cross-functional teams to deliver features and optimize performance. Led code reviews and mentored junior developers.',
        skillsLearnt: ['React', 'TypeScript', 'Node.js', 'Kubernetes', 'Google Cloud Platform', 'Microservices', 'Team Leadership', 'Code Review']
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
        title: 'Senior Software Engineer',
        companyOrInstitute: 'Microsoft',
        startYear: '2024',
        endYear: '2025',
        location: 'Seattle, WA',
        content: 'Currently leading a team of 5 engineers working on Azure cloud services. Responsible for architecture decisions, performance optimization, and ensuring high availability of critical systems.',
        skillsLearnt: ['Azure', 'C#', '.NET Core', 'Docker', 'DevOps', 'System Architecture', 'Performance Optimization', 'Team Management']
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
      },
      {
        _id: window.crypto.randomUUID(),
        qualificationType: 'Work',
        title: 'Frontend Developer Intern',
        companyOrInstitute: 'Airbnb',
        startYear: '2021',
        endYear: '2021',
        location: 'San Francisco, CA',
        content: 'Summer internship focused on improving user experience for the booking platform. Implemented responsive design components and collaborated with UX designers to enhance mobile interface.',
        skillsLearnt: ['React', 'CSS3', 'JavaScript', 'Responsive Design', 'User Experience', 'Git', 'Agile Development']
      }
    ];

}
