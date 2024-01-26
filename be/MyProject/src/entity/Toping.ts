// Toping.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';
import { Product } from './Product';
import { Checkout } from './Checkout';

@Entity({ name: 'toping' })
export class Toping {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  price: number;

  @Column()
  image: string;



  @ManyToOne(() => Product, product => product.topings)
  product: Product;

  @OneToMany(() => Checkout, checkout => checkout.toping, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  checkouts: Checkout[];
}