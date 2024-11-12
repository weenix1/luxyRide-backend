import { Module } from '@nestjs/common';
import { ClientsModule } from '@nestjs/microservices';
import { GatewayController } from './gateway.controller';
import {
  customersGrpcOptions,
  driversGrpcOptions,
} from './grpc-client.options';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'DRIVER_PACKAGE',
        ...driversGrpcOptions,
      },
      {
        name: 'CUSTOMER_PACKAGE',
        ...customersGrpcOptions,
      },
    ]),
  ],
  controllers: [GatewayController],
})
export class GatewayModule {}
