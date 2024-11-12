import { Injectable } from '@nestjs/common';
import { Driver } from 'libs/common/src/interfaces/transport.interface';

@Injectable()
export class DriversService {
  private readonly drivers: Driver[] = [
    { id: 1, name: 'John Doe', vehicle: 'Toyota Camry' },
    { id: 2, name: 'Jane Smith', vehicle: 'Honda Civic' },
  ];

  findOne(id: number): Driver {
    return this.drivers.find((driver) => driver.id === id);
  }
}
