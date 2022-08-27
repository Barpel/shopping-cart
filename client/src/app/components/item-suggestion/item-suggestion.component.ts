import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CartService } from '../../services/cart/cart.service';
import { ItemService } from 'src/app/services/item/item.service';
import { Item } from '../../items';


@Component({
  selector: 'app-item-suggestion',
  templateUrl: './item-suggestion.component.html',
  styleUrls: ['./item-suggestion.component.scss']
})
export class ItemSuggestionComponent implements OnInit, OnChanges {

  constructor(private cartService: CartService, private itemService: ItemService) {

  }

  @Input() searchTerm: string = '';
  items: Item[] = [];

  ngOnInit(): void {
  }

  ngOnChanges(): void {
    if (this.searchTerm.length) {
      this.itemService.getItems(this.searchTerm).subscribe((res: any) => {
        return this.items = res;
      })
    }
    this.items = [];
  }


  addToCart(item: Item) {
    this.cartService.addToCart(item);
  }

}
