import { Component } from '@angular/core';
import { ProductCardComponent } from "../../ui/product-card/product-card.component";

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [ProductCardComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {

  buy(event:string){
    console.log(event)
  }
}
