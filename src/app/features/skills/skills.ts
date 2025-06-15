export interface ISkillConfig{
    skillset: string;
    experience: string;
    expandable: boolean;
    skills: ISkill[];
    imgSrc: string;
}


export interface ISkill{
    skill: string;
    weightage: string;
}