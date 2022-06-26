import { Processor, Process } from '@nestjs/bull';

//* the consumer should add the coffee order to the database
@Processor('coffee-orders')
export class OrderConsumer {
  @Process('make-coffee')
  async makeCoffee() {}
}
