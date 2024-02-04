import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateProductDto } from 'src/trello/dtos/CreateProduct.dto';
import { ProductService } from 'src/trello/services/product/product.service';

@Controller('product')
export class ProductController {
    constructor(private productService: ProductService) {}

    @Get()
    getProductList() {
        return this.productService.fetchProduct();
    }

    @Post()
    createProduct(@Body() createProductDto: CreateProductDto) {
        return this.productService.createProduct(createProductDto);
    }
}
