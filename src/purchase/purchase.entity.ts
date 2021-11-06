import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { Product } from '../product/product.entity';

@Entity()
export class Purchase {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('double')
  total: number;

  @CreateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(6)',
  })
  created_at: Date;

  @Column({ length: 30 })
  payment_method: String;

  @Column({ length: 30 })
  status: String;

  @ManyToMany(() => Product)
  @JoinTable()
  products: Product[];
}
