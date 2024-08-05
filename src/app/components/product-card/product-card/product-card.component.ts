import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ProductModel } from '../../../models/Product.model';
import { StoreService } from '../../../services/store.service';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss',
})
export class ProductCardComponent {
  @Input() product!: ProductModel;

  constructor(public storeService: StoreService) {}
}
