import { Column, Entity, ObjectID, ObjectIdColumn } from 'typeorm';
@Entity()
export class HelloEntity {
  @ObjectIdColumn()
  id: ObjectID; //跟MySql不同这里需要使用ObjectID

  @Column()
  firstName: string;
}
