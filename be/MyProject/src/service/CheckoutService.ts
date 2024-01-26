// CheckoutService.ts
import { Request, Response } from 'express';
import { Repository } from 'typeorm';
import { Checkout } from '../entity/Checkout';
import { AppDataSource } from '../data-source';
import { User } from '../entity/User';
import { Product } from '../entity/Product';
import { Toping } from '../entity/Toping';


class CheckoutService {
  private readonly CheckoutRepository: Repository<Checkout> = AppDataSource.getRepository(Checkout);
  private readonly UserRepository: Repository<User> = AppDataSource.getRepository(User);
  private readonly ProductRepository: Repository<Product> = AppDataSource.getRepository(Product);
  private readonly TopingRepository: Repository<Toping> = AppDataSource.getRepository(Toping);

  async find(req: Request, res: Response) {
    try {
      const checkouts = await this.CheckoutRepository.find({
        relations: ['user', 'product', 'product.user', 'product.topings', 'toping'],
        order: {
          id: 'DESC',
        },
      });

      const formattedCheckouts = checkouts.map((checkout) => ({
        id: checkout.id,
        user: checkout.user,
        product: {
          id: checkout.product.id,
          name: checkout.product.name,
          price: checkout.product.price,
          image: checkout.product.image,
          user: checkout.product.user,
          topings: checkout.product.topings,
        },
        toping: checkout.toping,
        quantity: checkout.quantity,
        totalAmount: checkout.totalAmount,
      }));

      res.status(200).json(formattedCheckouts);
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
  async create(req: Request, res: Response) {
    const { userId, productId, topingId, quantity, totalAmount } = req.body;
    const loginSesion = res.locals.loginSesion
    try {
      // Peroleh instance user, product, dan toping dari database
      const userInstance = await this.UserRepository.findOne({ where: { id: loginSesion.users.id } });
      const productInstance = await this.ProductRepository.findOne({
        where: { id: productId },
        relations: ['user', 'topings'],
      });
      const topingInstance = await this.TopingRepository.findOne({ where: { id: topingId } });
  
      // Pastikan bahwa user, product, dan toping ditemukan
      if (!userInstance || !productInstance || !topingInstance) {
        return res.status(404).json({ error: 'User, Product, or Toping not found' });
      }
  
      // Buat instance Checkout
      const checkout = this.CheckoutRepository.create({
        user: userInstance,
        product: productInstance,
        toping: topingInstance,
        quantity,
        totalAmount,
      });
  
      // Simpan instance Checkout ke dalam database
      await this.CheckoutRepository.save(checkout);
  
      res.status(201).json(checkout); // 201 Created
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
  

  async delete(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const checkout = await this.CheckoutRepository.findOne({ where: { id: Number(id) } });
      if (!checkout) {
        return res.status(404).json({ error: 'Checkout not found' });
      }
      await this.CheckoutRepository.remove(checkout);
      res.status(200).json({ message: 'Checkout deleted successfully' });
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
  
}

export default new CheckoutService();
