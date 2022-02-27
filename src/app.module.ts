import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersController } from './users/users.controller';
import { FeedbackModule } from './feedback/feedback.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [TypeOrmModule.forRoot({

    type: "sqlite",
    database: "database/homework.db",
    entities: [
      "dist/**/**/*.entity{.ts,.js}"
    ],
    synchronize: true,
    migrations: [
      "dist/database/migrations/*.js"
    ],
    cli: {
      "migrationsDir": "database/migrations"
    },
    logging: true

  }), AuthModule, UsersModule, FeedbackModule],
  controllers: [AppController, UsersController],
  providers: [AppService],
})
export class AppModule { }
