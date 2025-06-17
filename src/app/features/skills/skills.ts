import { UUID } from "crypto";

export interface ISkillConfig{
    _id: UUID;
    isHovered: boolean;
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