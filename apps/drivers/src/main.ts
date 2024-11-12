import { NestFactory } from '@nestjs/core';
import { Transport, MicroserviceOptions } from '@nestjs/microservices';
import { join } from 'path';
import { DriversModule } from './drivers.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    DriversModule,
    {
      transport: Transport.GRPC,
      options: {
        package: 'transport',
        protoPath: join(__dirname, '../../../proto/transport.proto'),
        url: 'localhost:5000',
      },
    },
  );
  await app.listen();
}
bootstrap();
