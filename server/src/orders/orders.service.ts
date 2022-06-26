import { Injectable } from '@nestjs/common';
import { Queue } from 'bull';
import { InjectQueue } from '@nestjs/bull';

@Injectable()
export class OrdersService {
  constructor(@InjectQueue('coffee-orders') private coffeeQueue: Queue) {}

  async makeCoffee() {
    const order = await this.coffeeQueue.add(
      'make-coffee',
      {
        foo: 'bar',
      },
      /* Job options
      {
        priority: 2,
        delay: 3000,
      }, */
      //* use addBulk to add multiple coffees at once
    );
  }

  getAllOrders() {
    return 'hello';
    //* use getCompleted
  }
}
