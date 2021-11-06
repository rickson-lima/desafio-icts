import { Connection } from 'typeorm';
import { Purchase } from './purchase.entity';

export const purchaseProviders = [
  {
    provide: 'PURCHASE_REPOSITORY',
    useFactory: (connection: Connection) => connection.getRepository(Purchase),
    inject: ['DATABASE_CONNECTION'],
  },
];
