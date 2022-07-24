import { TypeOrmModuleOptions } from '@nestjs/typeorm';

const mongodbConfig: TypeOrmModuleOptions = {
  type: 'mongodb',
  database: 'hello',
  username: 'root',
  password: '123456',
  host: 'localhost', //如果是线上找运维拿地址
  port: 27017,
  autoLoadEntities: true,
  synchronize: true, //线上建议不要开启
};

//获取当前node的运行环境
const env = process.env.NODE_ENV;

if (env === 'development') {
} else if (env === 'production') {
} else {
}

export { mongodbConfig };
