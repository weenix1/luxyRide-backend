import { Controller, OnModuleInit, Inject, Post, Body } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import {
  SignupDto,
  SignupResponse,
} from 'apps/customers/src/customers.interface';
import { firstValueFrom, Observable } from 'rxjs';

interface CustomerService {
  signup(data: SignupDto): Observable<SignupResponse>;
}

@Controller('/customers')
export class CustomersGateway implements OnModuleInit {
  private customerService: CustomerService;

  constructor(@Inject('CUSTOMER_PACKAGE') private customerClient: ClientGrpc) {}

  onModuleInit() {
    this.customerService =
      this.customerClient.getService<CustomerService>('CustomerService');
  }

  @Post('/signup')
  async signup(@Body() dto: SignupDto) {
    return firstValueFrom(this.customerService.signup(dto));
  }
}
