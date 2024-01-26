import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Checkout } from './Checkout';
import { Product } from './Product';

@Entity({ name: 'user' })
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  handphone: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @OneToMany(() => Checkout, checkout => checkout.user)
  checkouts: Checkout[];

  @OneToMany(() => Product, product => product.user)
  products: Product[];
}