import { Component, OnInit, HostListener } from '@angular/core';
import { Item } from 'src/app/items';
import { CartService } from 'src/app/services/cart/cart.service';
import { ItemService } from 'src/app/services/item/item.service';

const PRODUCTS_IN_ROW = 3;

@Component({
  selector: 'app-products-search',
  templateUrl: './products-search.component.html',
  styleUrls: ['./products-search.component.scss']
})
export class ProductsSearchComponent implements OnInit {

  constructor(private itemService: ItemService, private cartService: CartService) { }

  items: Item[] = [];
  searchTerm: string = '';
  selectedProductIndex: number = NaN;
  selectedProductRows: { current: number; previous: number } = { current: NaN, previous: NaN };
  shouldShowAddToCart: boolean = false;
  addToCartText: string = '';

  ngOnInit(): void {
  }


  changeSelectedProduct(increase: number) {
    if (isNaN(this.selectedProductIndex)) {
      this.selectedProductIndex = 0;
      return;
    }

    const prevIndex = this.selectedProductIndex;
    const indexCalculation = this.selectedProductIndex + increase;
    this.selectedProductIndex = indexCalculation < 0 || indexCalculation >= this.items.length ? this.selectedProductIndex : indexCalculation;

    this.selectedProductRows.previous = Math.floor(prevIndex / PRODUCTS_IN_ROW);
    this.selectedProductRows.current = Math.floor(this.selectedProductIndex / PRODUCTS_IN_ROW);
  }

  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    const { code } = event;


    switch (code) {
      case 'ArrowDown':
        this.changeSelectedProduct(PRODUCTS_IN_ROW);
        break;
      case 'ArrowRight':
        this.changeSelectedProduct(1);
        break;
      case 'ArrowLeft':
        this.changeSelectedProduct(-1);
        break;
      case 'ArrowUp':
        this.changeSelectedProduct(-PRODUCTS_IN_ROW);
        break;
      case 'Enter':
        if (!isNaN(this.selectedProductIndex)) {
          const item = this.items[this.selectedProductIndex];
          this.searchTerm = item.name;
          this.cartService.addToCart(item);
          this.addToCartText = `Item ${item.name} added to cart`
          this.handleModalClick(false);
        }
        break;
    }
  }

  handleSearchPerformed(value: string) {
    this.itemService.getItems(value).subscribe((res: any) => {
      return this.items = res;
    })
  }
  
  handleModalClick(value: boolean) {
    this.shouldShowAddToCart = !value;
  }
}
