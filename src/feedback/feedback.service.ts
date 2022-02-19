import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UsersService } from 'src/users/users.service';
import { Repository } from 'typeorm';
import { CreateFeedbackDto } from './dto/create-feedback.dto';
import { Feedback } from './entities/feedback.entity';




@Injectable()
export class FeedbackService {

    constructor(
        @InjectRepository(Feedback) private feedbacksRepository: Repository<Feedback>,
        private readonly usersService: UsersService
    ) { }



    async handleCreateFeedbackRequest(createFeedbackDto: CreateFeedbackDto) {
        const user = await this.usersService.findUserByUserName(
            createFeedbackDto.user,
        );

        if (user) {
            const feedback = new Feedback();
            feedback.id = createFeedbackDto.id;
            feedback.project_name = createFeedbackDto.project_name;
            feedback.project_url = createFeedbackDto.project_url;
            feedback.project_feedback = createFeedbackDto.project_feedback;
            feedback.created = createFeedbackDto.created;
            feedback.modified = createFeedbackDto.modified;
            feedback.isValid = createFeedbackDto.isValid;
            feedback.user = user;
            return await this.feedbacksRepository.save(feedback)
        } else {
            console.log(`User ${user} not found.`);

        }
    }

    async handleGetFeedbacksRequest(): Promise<Feedback[]> {
        return await this.feedbacksRepository.find();

    }


    async findFeedbackByName(jokeName: string): Promise<Feedback> {
        const feedback = await this.feedbacksRepository.findOne({ where: { name: jokeName } });
        return feedback;
    }


    async getFeedbackById(id: string): Promise<Feedback> {
        return await this.feedbacksRepository.findOneOrFail(id, {
        });
    }

    async deleteFeedback(id: string): Promise<Feedback> {
        const feedback = await this.feedbacksRepository.findOneOrFail(id,);
        const status = await this.feedbacksRepository.delete(id);
        return feedback;
    }

    async getFeedbacksbyUser(id: string): Promise<Feedback[]> {
        const user = await this.usersService.getUserById(id)
        return user.feedbacks;
    }


}