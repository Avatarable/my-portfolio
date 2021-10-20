import { IEducationHistory } from "./educationHistory";
import { IProject } from "./project";
import { ISkill } from "./skill";
import { IWorkHistory } from "./workHistory";

export interface IInfo {
    firstName: string,
    lastName: string,
    email: string,
    phoneNumber: string,
    address: string,
    educationHistory: IEducationHistory[],
    workHistory: IWorkHistory[],
    skills: ISkill[],
    projects: IProject[]    
}