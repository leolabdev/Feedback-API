import { User } from "./user";


export class Feedback {

    id!: number;
    project_name!: string;
    project_url!: string;
    project_feedback!: string;
    created!: Date;
    modified!: Date;
    isValid!: boolean;
    user!: string;

}
