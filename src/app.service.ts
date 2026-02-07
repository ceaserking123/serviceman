import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  findLocation(): string {
    return 'Your location is: 123 Main St, Anytown, USA';
  }
}
