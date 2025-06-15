import { ISkill } from "../skills/skills";

export interface IQualificationsConfig {
    qualificationType: 'Education' | 'Work';
    title: string;
    companyOrInstitute: string;
    timeline: string;
    location: string;
    content: string;
    skillsLearnt: ISkill[];
}