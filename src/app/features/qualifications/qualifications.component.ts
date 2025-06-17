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
        title: 'Bachelor of Science in Computer Science',
        companyOrInstitute: 'Stanford University',
        startYear: '2018',
        endYear: '2022',
        location: 'Stanford, CA',
        content: 'Comprehensive computer science program covering algorithms, data structures, software engineering, and machine learning. Graduated with honors and completed a senior capstone project on distributed systems.',
        skillsLearnt: ['Python', 'Java', 'C++', 'Data Structures', 'Algorithms', 'Machine Learning', 'Database Design', 'Software Engineering']
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
        title: 'Master of Business Administration',
        companyOrInstitute: 'Harvard Business School',
        startYear: '2020',
        endYear: '2022',
        location: 'Boston, MA',
        content: 'Part-time MBA program focused on technology management and entrepreneurship. Completed case studies on digital transformation and led a consulting project for a Fortune 500 company.',
        skillsLearnt: ['Strategic Planning', 'Financial Analysis', 'Leadership', 'Project Management', 'Digital Transformation', 'Market Analysis']
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
        title: 'AWS Certified Solutions Architect',
        companyOrInstitute: 'Amazon Web Services',
        startYear: '2023',
        endYear: '2023',
        location: 'Online',
        content: 'Professional certification demonstrating expertise in designing distributed systems on AWS. Covered best practices for security, reliability, performance efficiency, and cost optimization.',
        skillsLearnt: ['AWS Services', 'Cloud Architecture', 'Security Best Practices', 'Cost Optimization', 'High Availability Design', 'Disaster Recovery']
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
