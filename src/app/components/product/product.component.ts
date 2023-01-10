import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../models/product';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent {
  product: Product | undefined;

  basePrice:number = 1999;

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService
  ) {}

  @Input() layout: string;

  ngOnInit(): void {
    this.getProduct();
  }

  getProduct(): void {
    const id = parseInt(this.route.snapshot.paramMap.get('id')!, 10);
    this.productsService.getProduct(id).subscribe((product) => {
      this.product = product;
      this.product.productImage = this.setProductImage(this.product.productName)
    });
  }

  setProductImage(productName:string): string {
    return `https://wapro.pl/wp-content/uploads/2020/10/${productName.replace(' ', '-')}.jpg`;
  }

}
