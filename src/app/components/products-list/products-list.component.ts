import { Component, Input } from '@angular/core';
import {
  Location,
  LocationStrategy,
  PathLocationStrategy,
} from '@angular/common';
import { Product } from '../../models/product';
import { ProductsService } from '../../services/products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products-list',
  providers: [
    Location,
    { provide: LocationStrategy, useClass: PathLocationStrategy },
  ],
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss'],
})
export class ProductsListComponent {
  location: Location;
  selectedLayout: String[] = ['list'];
  products: Product[] = [];
  selectedProduct: Product;

  layout: Array<{ icon: string; style: string }> = [
    {
      icon: 'detailslayout',
      style: 'list',
    },
    {
      icon: 'smalliconslayout',
      style: 'tiles',
    },
  ];

  constructor(
    private productsService: ProductsService,
    location: Location,
    private router: Router
  ) {
    this.navigateTo = this.navigateTo.bind(this);
    this.location = location;
  }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(): void {
    this.productsService.getProducts().subscribe((products) => {
      this.products = products;
      for (let product in this.products) {
        this.products[product].productImage = this.setProductImage(
          this.products[product].productName
        );
      }
    });
  }

  setProductImage(productName: string): string {
    return `https://wapro.pl/wp-content/uploads/2020/10/${productName.replace(
      ' ',
      '-'
    )}.jpg`;
  }

  navigateTo(e: any) {
    console.log(e.data.productId);
    this.router.navigate([`/product/${e.data.productId}`]);
  }
}
