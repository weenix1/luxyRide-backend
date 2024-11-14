import { Injectable } from '@nestjs/common';
import { SignupDto, SignupResponse } from './customers.interface';

@Injectable()
export class CustomersService {
  signup(dto: SignupDto): SignupResponse {
    return { success: true, customerId: '123', token: JSON.stringify(dto) };
  }
}
