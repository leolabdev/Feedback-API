import { ApiProperty } from "@nestjs/swagger";
import { IsString, Length } from "class-validator";

export class CreateFeedbackDto {


    id?: number;

    @ApiProperty({ example: 'Umbrella', description: 'The project name ' })
    @IsString()
    project_name: string;

    @ApiProperty({ example: 'bestproject.com/somepath/umbrella', description: "project's url" })
    @IsString()
    project_url: string;

    @ApiProperty({ example: 'Very good project', description: 'Feedback of the Project' })
    @IsString()
    @Length(10, 200)
    project_feedback: string;


    created?: Date;

    modified?: Date;

    isValid?: boolean;

    user?: string;

}