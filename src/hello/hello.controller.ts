import { Controller, ForbiddenException, Get, Post, Query } from '@nestjs/common';
import { ApiHideProperty, ApiOperation } from '@nestjs/swagger';
import { query } from 'express';
import { SaveHelloDto } from './dto/SaveHelloDto';
import { HelloEntity } from './hello.entity';
import { HelloService } from './hello.service';

//访问的时 http://localhost:4000/hello/get 如果使用setGlobalPrefix设置了还要加修饰
@Controller('hello')
export class HelloController {
  constructor(private readonly helloService: HelloService) {}

  @Get('/get')
  getHello() {
    return this.helloService.getHello();
  }

  //路由注释
  @ApiOperation({
    description: '保存数据',
    deprecated: true,
  })
  @Post()
  saveHello() {
    return this.helloService.saveHello('test1');
  }

  @Get('/save')
  saveHelloGet(@Query() query: SaveHelloDto) {
    return this.helloService.saveHello(query.firstName);
  }

  @ApiOperation({
    description: '测试异常',
  })
  @Get('/testExeption')
  testExption() {
    throw new ForbiddenException();
  }
}
