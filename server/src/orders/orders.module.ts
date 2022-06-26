import { OrderConsumer } from './order.consumer';
import { Module } from '@nestjs/common';
import { BullModule } from '@nestjs/bull';

import { OrdersController } from './orders.controller';
import { OrdersService } from './orders.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrderRepository } from './order.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([OrderRepository]),
    BullModule.forRoot({
      redis: {
        host: 'localhost',
        port: 6379,
      },
    }),
    BullModule.registerQueue({
      name: 'coffee-orders',
    }),
  ],
  controllers: [OrdersController],
  providers: [OrdersService, OrderConsumer],
})
export class OrdersModule {}
