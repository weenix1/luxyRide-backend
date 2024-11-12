import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { DriversService } from './drivers.service';
import { Driver } from 'libs/common/src/interfaces/transport.interface';

@Controller()
export class DriversController {
  constructor(private readonly driversService: DriversService) {}

  @GrpcMethod('DriverService', 'FindOne')
  findOne(data: { id: number }): Driver {
    return this.driversService.findOne(data.id);
  }
}
