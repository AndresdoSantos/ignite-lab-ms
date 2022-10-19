import { UseGuards } from '@nestjs/common';
import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';

import { AuthorizationGuard } from '../../auth/authorization.guard';

import { CreateProductInput } from '../inputs/create-product-input';

import { ProductsService } from '../../../services/products.services';

import { Product } from '../models/product';

@Resolver(() => Product)
export class ProductsResolver {
  constructor(private productsService: ProductsService) {}

  @Query(() => [Product])
  products() {
    return this.productsService.listAllProducts();
  }

  @Mutation(() => Product)
  @UseGuards(AuthorizationGuard)
  createProduct(@Args('data') { title }: CreateProductInput) {
    return this.productsService.createProduct({ title });
  }
}
