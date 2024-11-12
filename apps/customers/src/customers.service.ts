import { Injectable } from '@nestjs/common';
import { Customer } from 'libs/common/src/interfaces/transport.interface';

@Injectable()
export class CustomersService {
  private readonly customers: Customer[] = [
    { id: 1, name: 'Alice Johnson', email: 'alice@example.com' },
    { id: 2, name: 'Bob Wilson', email: 'bob@example.com' },
  ];

  findOne(id: number): Customer {
    return this.customers.find((customer) => customer.id === id);
  }
}
