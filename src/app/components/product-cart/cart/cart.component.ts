import { Component, Input } from '@angular/core';
import { ProductModel } from '../../../models/Product.model';
import { StoreService } from '../../../services/store.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss',
})
export class CartComponent {
  @Input() product!: ProductModel;

  constructor(public storeService: StoreService) {}
}
