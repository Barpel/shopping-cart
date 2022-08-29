import { Component, OnInit, Input, ViewChild, AfterViewChecked, ElementRef } from '@angular/core';
import { CartService } from '../../services/cart/cart.service';
import { ItemService } from 'src/app/services/item/item.service';
import { Item } from '../../items';


@Component({
  selector: 'app-item-suggestion',
  templateUrl: './item-suggestion.component.html',
  styleUrls: ['./item-suggestion.component.scss']
})
export class ItemSuggestionComponent implements OnInit, AfterViewChecked {

  constructor(private cartService: CartService) {

  }
  el: any;

  @ViewChild('scrollTarget')
  set selectedItem(selectedEl: ElementRef) {
    if (selectedEl) {
      this.el = selectedEl.nativeElement;
    }
  }

  @Input() searchTerm: string = '';
  @Input() selectedItemIndex: number = NaN;
  @Input() items: Item[] = [];
  @Input() selectedProductRows!: { current: number; previous: number };

  ngOnInit(): void {
  }

  ngAfterViewChecked(): void { //  a bit janky when going up
    if (this.el && (this.selectedProductRows.current !== this.selectedProductRows.previous)) {
      this.el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }


  addToCart(item: Item) {
    this.cartService.addToCart(item);
  }

}
