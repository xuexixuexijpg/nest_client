import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { AllExceptionsFilter } from './common/filters/any-exception.filter';
import { HelloInterceptor } from './hello/interceptor/hello.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('v1'); //全局的
  //swagger文档
  const config = new DocumentBuilder()
    .setTitle('Hello api')
    .setDescription('This is document for Hello spi')
    .setVersion('v1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  app.useGlobalPipes(new ValidationPipe()); //管道，转换和检验，可看文档

  app.useGlobalInterceptors(new HelloInterceptor()); //拦截器
  app.useGlobalFilters(new AllExceptionsFilter()); //过滤器
  await app.listen(4000);
}
bootstrap();
