import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersController } from './users/users.controller';
import { FeedbackModule } from './feedback/feedback.module';

@Module({
  imports: [TypeOrmModule.forRoot(), FeedbackModule],
  controllers: [AppController, UsersController],
  providers: [AppService],
})
export class AppModule { }
