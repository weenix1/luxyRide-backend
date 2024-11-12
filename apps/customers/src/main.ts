import { NestFactory } from '@nestjs/core';
import { Transport, MicroserviceOptions } from '@nestjs/microservices';
import { join } from 'path';
import { CustomersModule } from './customers.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    CustomersModule,
    {
      transport: Transport.GRPC,
      options: {
        package: 'transport',
        protoPath: join(__dirname, '../../../proto/transport.proto'),
        url: 'localhost:5001',
      },
    },
  );
  await app.listen();
}
bootstrap();
