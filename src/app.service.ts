import { Injectable } from '@nestjs/common';
import { HelloService } from './hello/hello.service';

@Injectable()
export class AppService {
  //按照编码规范，在构造器中注入HelloService
  constructor(private readonly helloService: HelloService) {}

  getHello(): string {
    // return this.helloService.getHello();
    return 'hhh';
  }
}
