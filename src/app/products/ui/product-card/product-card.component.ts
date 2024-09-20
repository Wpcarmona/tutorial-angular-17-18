import { Component, input, output } from '@angular/core';
import { ProductSercices } from '../../data-access/products.services';
@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {
  
  product = input.required<ProductSercices>();

  buy = output<ProductSercices>()


  buyProduct(){
    this.buy.emit(this.product())
  }

}
