import { Component, OnInit, HostListener } from '@angular/core';
import { ViewportScroller } from '@angular/common';
import { Item } from 'src/app/items';
import { ItemService } from 'src/app/services/item/item.service';

const PRODUCTS_IN_ROW = 3;

@Component({
  selector: 'app-products-search',
  templateUrl: './products-search.component.html',
  styleUrls: ['./products-search.component.scss']
})
export class ProductsSearchComponent implements OnInit {

  constructor(private itemService: ItemService, private scroller: ViewportScroller) { }

  items: Item[] = [];
  searchTerm: string = '';
  selectedProductIndex: number = NaN;

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

    const previousRow = Math.floor(prevIndex / PRODUCTS_IN_ROW);
    const currentRow = Math.floor(this.selectedProductIndex / PRODUCTS_IN_ROW);

    if (increase === PRODUCTS_IN_ROW || increase === -PRODUCTS_IN_ROW || previousRow !== currentRow) {
      // setTimeout(() => {
      //   this.scroller.scrollToAnchor('selected');
      // }, 0);
    }
    console.log(this.selectedProductIndex);
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
    }
  }

  handleSearchPerformed(value: string) {
    this.itemService.getItems(value).subscribe((res: any) => {
      return this.items = res;
    })
  }
}
