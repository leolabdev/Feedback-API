import { ApiProperty } from "@nestjs/swagger";
import { User } from "src/users/entities/user.entity";
import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Feedback {

    @ApiProperty()
    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty()
    @Column()
    project_name: string;

    @ApiProperty()
    @Column()
    project_url: string;

    @ApiProperty()
    @Column()
    project_feedback: string;

    @ApiProperty()
    @CreateDateColumn()
    created: Date;

    @ApiProperty()
    @UpdateDateColumn()
    modified: Date;

    @ApiProperty()
    isValid?: boolean;


    @ApiProperty({ type: () => User })
    @ManyToOne(() => User, (user) => user.feedbacks)
    user: User;


}