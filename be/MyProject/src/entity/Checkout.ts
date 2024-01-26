// Checkout.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { User } from './User';
import { Product } from './Product';
import { Toping } from './Toping';

@Entity({ name: 'checkout' })
export class Checkout {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  quantity: number;

  @Column()
  totalAmount: number;

  @ManyToOne(() => User, user => user.checkouts, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  user: User;

  @ManyToOne(() => Product, product => product.checkouts, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn({ name: 'productId' })
  product: Product;

  @ManyToOne(() => Toping, toping => toping.checkouts, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  toping: Toping;
}
