import { Component } from '@angular/core';
import { CartService } from './services/cart/cart.service';
import { Item } from './items';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor() { }

  searchTerm = ''

  onPerformSearch(value: string) {
    this.searchTerm = value;
  }
}
