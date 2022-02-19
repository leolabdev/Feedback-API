import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class CreateUserDto {
    id?: number;
    @ApiProperty({ example: 'John228', description: 'Username' })
    @IsString()
    username: string;
    @ApiProperty({ example: '1241413edw34', description: 'Password' })
    @IsString()
    password: string;
    created?: Date;
    modified?: Date;
    isValid?: boolean;
}