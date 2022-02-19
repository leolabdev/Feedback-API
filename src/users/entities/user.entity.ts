import { Feedback } from "src/feedback/entities/feedback.entity";
import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ unique: true })
    username: string;

    @Column()
    password: string;

    @CreateDateColumn()
    created: Date;

    @UpdateDateColumn()
    modified: Date;

    @Column({ default: true })
    isValid: boolean;

    @OneToMany(() => Feedback, (feedback) => feedback.user)
    feedbacks?: Feedback[];

}