import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './product/product.module';
import { PurchaseModule } from './purchase/purchase.module';

@Module({
  imports: [ProductModule, PurchaseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
