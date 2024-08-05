import { Component, Input } from '@angular/core';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { ProductModel } from '../../models/Product.model';
import { StoreService } from '../../services/store.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [SearchBarComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  @Input() product!: ProductModel;

  constructor(public storeService: StoreService) {}
}
