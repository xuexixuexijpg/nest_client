import { MiddlewareConsumer, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HelloMiddleware } from './hello/middleware/hello.middleware';
import { HelloModule } from './hello/hello.module';
import { mongodbConfig } from './common/config/dbConfig';
import loggerOptions from './common/config/loggerConfig';
import { WinstonModule } from 'nest-winston';

@Module({
  imports: [HelloModule, TypeOrmModule.forRoot(mongodbConfig), WinstonModule.forRoot(loggerOptions)],
  //引入hello模块就可以使用helloe模块中导出的服务
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    //设置中间件 路由为所有路由
    consumer.apply(HelloMiddleware).forRoutes('*');
  }
}
