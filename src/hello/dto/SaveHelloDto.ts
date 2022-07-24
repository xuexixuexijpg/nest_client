import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class SaveHelloDto {
  //用于做参数校验的,参数注释
  @ApiProperty({
    required: true,
    description: '头名字',
  })
  @IsNotEmpty()
  @IsString()
  firstName: string;
}
