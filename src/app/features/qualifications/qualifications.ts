import { UUID } from "crypto";

export interface IQualificationsConfig {
    _id: UUID;
    qualificationType: 'Education' | 'Work';
    title: string;
    companyOrInstitute: string;
    startYear: string;
    endYear: string;
    location: string;
    content: string;
    skillsLearnt: string[];
}