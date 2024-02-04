import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateProductParam } from 'src/trello/types/type';
import { Product } from 'src/typeorm/entities/trello/Product';
import { Repository } from 'typeorm';

@Injectable()
export class ProductService {
    constructor(@InjectRepository(Product) private productRepository: Repository<Product>) {}

    fetchProduct() {
        return this.productRepository.find();
    }

    createProduct(createProductParam: CreateProductParam) {
        const newProduct = this.productRepository.create(createProductParam);
        return this.productRepository.save(newProduct);
    }
}
