// Product.entity.ts
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { User } from './User';
import { Checkout } from './Checkout';
import { Toping } from './Toping';

@Entity({ name: 'product' })
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  price: number;

  @Column()
  image: string;


  @ManyToOne(() => User, user => user.products)
  @JoinColumn({ name: 'userId' })
  user: User;

  @OneToMany(() => Checkout, checkout => checkout.product, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  checkouts: Checkout[];

  @OneToMany(() => Toping, toping => toping.product)
  topings: Toping[];
}