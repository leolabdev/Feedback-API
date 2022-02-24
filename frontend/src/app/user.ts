import { Feedback } from "./feedback";

export class User {

    id?: number;

    username?: string;

    password?: string;

    created?: Date;

    modified?: Date;

    isValid?: boolean;

    feedbacks?: Feedback[]

}
