import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgFor, NgIf } from '@angular/common';

import { NavbarComponent } from '../../navbar.component';
import { ProductModel } from '../../../../models/Product.model';
import { StoreService } from '../../../../services/store.service';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [FormsModule, NgFor, NgIf],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.scss',
})
export class SearchBarComponent {
  @Input() product!: ProductModel;

  constructor(public storeService: StoreService) {}
}
