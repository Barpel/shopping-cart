import { Component, EventEmitter, Output } from '@angular/core';
import { Observable, debounceTime } from 'rxjs';
import { CartService } from './services/cart/cart.service';
import { ItemService } from './services/item/item.service';
import { Item } from './items';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(
    private cartService: CartService,
    private itemService: ItemService,
  ) { }

  searchTerm = ''

  itemsInCart: Item[] = this.cartService.getItems();

  onPerformSearch(value: string) {
    this.searchTerm = value;
  }
}
