import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { PurchaseController } from './purchase.controller';
import { purchaseProviders } from './purchase.providers';
import { PurchaseService } from './purchase.service';

@Module({
  imports: [DatabaseModule],
  controllers: [PurchaseController],
  providers: [...purchaseProviders, PurchaseService],
})
export class PurchaseModule {}
