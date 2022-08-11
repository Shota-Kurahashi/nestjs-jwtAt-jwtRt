import { ValidationPipe } from '@nestjs/common';
import { NestFactory, Reflector } from '@nestjs/core';
import { AppModule } from './app.module';
import { AtGuard } from './common/guards';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // const reflector = new Reflector();
  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalGuards(new AtGuard());
  await app.listen(3005);
}
bootstrap();
