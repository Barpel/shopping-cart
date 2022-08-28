import { Component, OnInit, Input, OnChanges, SimpleChanges, ViewChild, ElementRef } from '@angular/core';
import { CartService } from '../../services/cart/cart.service';
import { ItemService } from 'src/app/services/item/item.service';
import { Item } from '../../items';


@Component({
  selector: 'app-item-suggestion',
  templateUrl: './item-suggestion.component.html',
  styleUrls: ['./item-suggestion.component.scss']
})
export class ItemSuggestionComponent implements OnInit, OnChanges {

  constructor(private cartService: CartService) {

  }

  @ViewChild('selected') selectedItem!: ElementRef;

  @Input() searchTerm: string = '';
  @Input() selectedItemIndex: number = NaN;
  @Input() items: Item[] = [];

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    const change = changes['selectedItemIndex'];
    if (change) {
      console.log('change!', change);
      this.selectedItem?.nativeElement?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }


  addToCart(item: Item) {
    this.cartService.addToCart(item);
  }

}
