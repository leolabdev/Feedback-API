import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersController } from './users/users.controller';

@Module({
  imports: [TypeOrmModule.forRoot()],
  controllers: [AppController, UsersController],
  providers: [AppService],
})
export class AppModule { }
