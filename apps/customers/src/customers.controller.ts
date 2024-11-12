import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { CustomersService } from './customers.service';
import { Customer } from 'libs/common/src/interfaces/transport.interface';

@Controller()
export class CustomersController {
  constructor(private readonly customersService: CustomersService) {}

  @GrpcMethod('CustomerService', 'FindOne')
  findOne(data: { id: number }): Customer {
    return this.customersService.findOne(data.id);
  }
}
