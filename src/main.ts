import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

const swaggerInfo = {
  api_patch: "/docs",
  title: "Feedback API",
  decription: "API for sending feedbacks",
  version: "0.9",
  tag: ""

};




async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // for communicating with our REST API from an Angular frontend running on another domain we need to enable CORS.
  app.enableCors();

  const config = new DocumentBuilder()

    .addBearerAuth(
      { type: 'http', scheme: 'bearer', bearerFormat: 'JWT' },
      'access-token',
    )
    .setTitle(swaggerInfo.title)
    .setDescription(swaggerInfo.decription)
    .setVersion(swaggerInfo.version)
    .addTag(swaggerInfo.tag)
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup(swaggerInfo.api_patch, app, document);

  await app.listen(3000);
  console.log(`server started on {http://localhost:3000/}`);
}
bootstrap();
