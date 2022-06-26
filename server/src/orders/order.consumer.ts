import { CreateOrderDto } from './dto/create-order.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { OrderRepository } from './order.repository';
import { Processor, Process } from '@nestjs/bull';
import { Job } from 'bull';

@Processor('coffee-orders')
export class OrderConsumer {
  constructor(
    @InjectRepository(OrderRepository) private orderRepo: OrderRepository,
  ) {}

  @Process('make-coffee')
  async processOrder(job: Job<CreateOrderDto>) {
    console.log('reached processor');

    await this.orderRepo.createOrder(job.data);
  }
}
