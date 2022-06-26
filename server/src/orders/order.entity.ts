import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { OrderStatus } from './order-status.enum';

@Entity('Order')
export class Order extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  client: string;

  @Column()
  status: OrderStatus;
}
