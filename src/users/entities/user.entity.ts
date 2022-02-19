import { ApiProperty } from "@nestjs/swagger";
import { Feedback } from "src/feedback/entities/feedback.entity";
import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class User {

    @ApiProperty()
    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty()
    @Column({ unique: true })
    username: string;

    @ApiProperty()
    @Column()
    password: string;

    @ApiProperty()
    @CreateDateColumn()
    created: Date;

    @ApiProperty()
    @UpdateDateColumn()
    modified: Date;

    @ApiProperty()
    @Column({ default: true })
    isValid: boolean;

    @ApiProperty()
    @OneToMany(() => Feedback, (feedback) => feedback.user)
    feedbacks?: Feedback[];

}