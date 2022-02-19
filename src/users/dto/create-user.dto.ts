export class CreateUserDto {
    id?: number;
    username: string;
    password: string;
    created?: Date;
    modified?: Date;
    isValid?: boolean
}