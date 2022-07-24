import { Inject, Injectable, LoggerService, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';
import { WINSTON_MODULE_NEST_PROVIDER } from 'nest-winston';

//中间件
@Injectable()
export class HelloMiddleware implements NestMiddleware {
  constructor(@Inject(WINSTON_MODULE_NEST_PROVIDER) private readonly logger: LoggerService) {}
  use(req: Request, res: Response, next: () => void) {
    this.logger.log(JSON.stringify(`${req.method} ${req.originalUrl} ${JSON.stringify(req.query)}`));
    next();
  }
}
