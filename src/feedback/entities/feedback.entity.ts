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

    @CreateDateColumn()
    created: Date;

    @UpdateDateColumn()
    modified: Date;



    @ManyToOne(() => User, (user) => user.feedbacks)
    user: User;


}