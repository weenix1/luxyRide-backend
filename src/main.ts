import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

const PORT = process.env.PORT ?? 3000;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  const config = new DocumentBuilder()
    .setTitle('LuxyRyde Api')
    .setDescription('The LuxyRyde api documentation')
    .setVersion('1.0')
    .addTag('luxury ride')
    .build();

  const documentFactory = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, documentFactory);
  await app.listen(+PORT, () => {
    console.log(`Listening on http://localhost:${+PORT}`);
  });
}
bootstrap();
