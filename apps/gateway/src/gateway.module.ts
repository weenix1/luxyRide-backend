import { Module } from '@nestjs/common';
import { ClientsModule } from '@nestjs/microservices';
import { customersGrpcOptions } from './grpc-client.options';
import { CustomersGateway } from './controllers/customers.gateway.';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'CUSTOMER_PACKAGE',
        ...customersGrpcOptions,
      },
    ]),
  ],
  controllers: [CustomersGateway],
})
export class GatewayModule {}
