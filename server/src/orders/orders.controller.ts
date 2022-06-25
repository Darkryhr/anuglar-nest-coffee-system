import { OrdersService } from './orders.service';
import { Controller, Get, Post } from '@nestjs/common';

@Controller('orders')
export class OrdersController {
  constructor(private ordersService: OrdersService) {}

  @Post()
  makeOrder() {}

  @Get()
  getAllOrders() {}
}
