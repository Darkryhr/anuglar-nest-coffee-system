import { OrdersService } from './orders.service';
import { Controller, Get, Post, Body } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';

@Controller('orders')
export class OrdersController {
  constructor(private ordersService: OrdersService) {}

  @Post()
  makeOrder(@Body() createOrderDto: CreateOrderDto) {
    console.log('reached controller');
    return this.ordersService.makeCoffee(createOrderDto);
  }

  @Get()
  getAllOrders() {
    return this.ordersService.getAllOrders();
  }
}
