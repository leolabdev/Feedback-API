import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ApiCreatedResponse, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateFeedbackDto } from './dto/create-feedback.dto';
import { Feedback } from './entities/feedback.entity';
import { FeedbackService } from './feedback.service';

@Controller('feedback')

@Controller('feedbacks')
@ApiTags('feedbacks')
export class FeedbackController {
    constructor(private feedbacksService: FeedbackService) { }

    @Post()
    @ApiOperation({ summary: 'Create feedback' })
    @ApiCreatedResponse({
        description: 'Feedback has been succefully created ',
        type: Feedback
    })
    //@UseGuards(JwtAuthGuard)
    async createFeedback(@Body() createFeedbackDto: CreateFeedbackDto): Promise<Feedback> {
        return await this.feedbacksService.handleCreateFeedbackRequest(createFeedbackDto);
    }

    @Get()
    @ApiOperation({ summary: 'Get all feedbacks' })
    @ApiResponse({ status: 200, description: 'Ok' })
    // @UseGuards(JwtAuthGuard)
    async getFeedbacks(): Promise<Feedback[]> {
        return this.feedbacksService.handleGetFeedbacksRequest();
    }

    @Get(':id')
    @ApiOperation({ summary: 'Get a feedback' })
    @ApiResponse({ status: 200, description: 'Ok' })
    @ApiResponse({ status: 404, description: 'could not find matching feedback' })
    //@UseGuards(JwtAuthGuard)
    async getFeedback(@Param('id') id: string): Promise<Feedback> {
        return await this.feedbacksService.getFeedbackById(id);
    }

    @Delete(':id')
    @ApiOperation({ summary: 'Delete a feedback' })
    @ApiResponse({ status: 200, description: 'Deleted' })
    @ApiResponse({ status: 404, description: 'could not find matching photo' })
    //@UseGuards(JwtAuthGuard)
    async deleteFeetback(@Param('id') id: string): Promise<Feedback> {
        return await this.feedbacksService.deleteFeedback(id);
    }


}