import { utilities, WinstonModule } from 'nest-winston';
import * as winston from 'winston';
import { join } from 'path';
import * as moment from 'moment';

const loggerOptions: winston.LoggerOptions = {};

loggerOptions.transports = [
  new winston.transports.Console({
    format: winston.format.combine(
      winston.format.timestamp(),
      winston.format.ms(),
      utilities.format.nestLike('MyApp', {}),
    ),
  }),
  //文件
  new winston.transports.File({
    format: winston.format.combine(
      winston.format.timestamp(),
      winston.format.ms(),
      utilities.format.nestLike('MyApp', {
        // options
      }),
    ),
    //当前根目录
    filename: join(process.cwd(), `nest-${moment().format('MM-DD')}.log`),
  }),
];

export default loggerOptions;
