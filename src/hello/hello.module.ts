import { Module } from '@nestjs/common';
import { HelloService } from './hello.service';
import { HelloController } from './hello.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HelloEntity } from './hello.entity';

@Module({
  imports: [TypeOrmModule.forFeature([HelloEntity])],
  providers: [HelloService],
  //导出服务，然后在app模块中导入模块之后，在appService中就可以用这个模块的服务了
  exports: [HelloService],
  controllers: [HelloController],
})
export class HelloModule {}
