import { CreateOrderDto } from './dto/create-order.dto';
import { Order } from './order.entity';
import { EntityRepository, Repository } from 'typeorm';

@EntityRepository(Order)
export class OrderRepository extends Repository<Order> {
  async createOrder(createOrderDto: CreateOrderDto): Promise<Order> {
    const order = new Order();
    order.client = createOrderDto.client;
    await order.save();
    return order;
  }
}
