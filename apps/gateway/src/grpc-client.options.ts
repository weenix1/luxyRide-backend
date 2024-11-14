import { ClientOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';

export const customersGrpcOptions: ClientOptions = {
  transport: Transport.GRPC,
  options: {
    package: 'customers',
    protoPath: join(__dirname, '../../../proto/customers.proto'),
    url: 'localhost:5001',
  },
};
