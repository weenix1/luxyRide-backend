import { ClientOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';

export const driversGrpcOptions: ClientOptions = {
  transport: Transport.GRPC,
  options: {
    package: 'transport',
    protoPath: join(__dirname, '../../../proto/transport.proto'),
    url: 'localhost:5000',
  },
};

export const customersGrpcOptions: ClientOptions = {
  transport: Transport.GRPC,
  options: {
    package: 'transport',
    protoPath: join(__dirname, '../../../proto/transport.proto'),
    url: 'localhost:5001',
  },
};
