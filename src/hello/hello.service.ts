import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { HelloEntity } from './hello.entity';

@Injectable()
export class HelloService {
  constructor(
    @InjectRepository(HelloEntity)
    private helloRepository: Repository<HelloEntity>,
  ) {}
  getHello() {
    return this.helloRepository.find();
  }

  /**
   * 操作数据库
   */
  async saveHello(firstName: string) {
    const hello = new HelloEntity();
    hello.firstName = firstName;
    return this.helloRepository.save(hello);
  }
}
