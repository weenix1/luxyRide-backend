import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { CustomersService } from './customers.service';
import { SignupDto, SignupResponse } from './customers.interface';

@Controller()
export class CustomersController {
  constructor(private readonly customersService: CustomersService) {}

  @GrpcMethod('CustomerService', 'Signup')
  async signup(data: SignupDto): Promise<SignupResponse> {
    return this.customersService.signup(data);
  }
}
