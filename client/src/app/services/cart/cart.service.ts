import { Injectable } from '@angular/core';
import { Item } from '../../items';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }
  items: Item[] = [];

  addToCart(item: Item) {
    this.items.push(item);
  }

  getItems() {
    return this.items;
  }

  removeFromCart(itemId: string | number) {
    const itemIndex = this.items.findIndex(item => item.sku === itemId);
    this.items.splice(itemIndex, 1);
  }
}
