import { CreateOrderDto } from './dto/create-order.dto';
import { Injectable } from '@nestjs/common';
import { JobOptions, Queue } from 'bull';
import { InjectQueue } from '@nestjs/bull';
import { InjectRepository } from '@nestjs/typeorm';
import { OrderRepository } from './order.repository';

@Injectable()
export class OrdersService {
  constructor(
    @InjectQueue('coffee-orders') private coffeeQueue: Queue,
    @InjectRepository(OrderRepository) private orderRepo: OrderRepository,
  ) {}

  async makeCoffee(createOrderDto: CreateOrderDto): Promise<void> {
    console.log('reached service');
    this.orderRepo.create(createOrderDto);
    // let options: JobOptions = {};
    // if (createOrderDto.delay) {
    //   options.delay = createOrderDto.delay;
    // }
    // // if(boss){
    // //   options.priority = ...
    // // }
    // await this.coffeeQueue.add('make-coffee', {
    //   client: createOrderDto.client,
    //   options,
    // });
  }

  getAllOrders() {
    return 'hello';
    //* use getCompleted
  }
}
