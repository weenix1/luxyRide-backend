import { Controller, Get, Param, OnModuleInit, Inject } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';
import {
  Driver,
  Customer,
} from '../../../libs/common/src/interfaces/transport.interface';

interface DriverService {
  findOne(data: { id: number }): Promise<Driver>;
}

interface CustomerService {
  findOne(data: { id: number }): Promise<Customer>;
}

@Controller()
export class GatewayController implements OnModuleInit {
  private driverService: DriverService;
  private customerService: CustomerService;

  constructor(
    @Inject('DRIVER_PACKAGE') private driverClient: ClientGrpc,
    @Inject('CUSTOMER_PACKAGE') private customerClient: ClientGrpc,
  ) {}

  onModuleInit() {
    this.driverService =
      this.driverClient.getService<DriverService>('DriverService');
    this.customerService =
      this.customerClient.getService<CustomerService>('CustomerService');
  }

  @Get('drivers/:id')
  async getDriver(@Param('id') id: string) {
    return firstValueFrom(
      this.driverService.findOne({ id: parseInt(id, 10) }) as any,
    );
  }

  @Get('customers/:id')
  async getCustomer(@Param('id') id: string) {
    return firstValueFrom(
      this.customerService.findOne({ id: parseInt(id, 10) }) as any,
    );
  }
}
