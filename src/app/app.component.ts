import { Component } from '@angular/core';
import { ProductService } from './product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'NarendraApp';
  productsdata: any;

  constructor(private productService: ProductService) {

  }
  ngOnInit() {
    this.getProducts();
  }
  getProducts() {
    this.productService.getProducts().subscribe(res => {
      this.productsdata = res;
    })
  }
}
