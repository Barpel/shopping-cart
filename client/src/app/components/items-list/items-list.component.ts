import { Component, OnInit, Input } from '@angular/core';
import { CartService } from '../../services/cart/cart.service';
import { Item } from '../../items';


@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.scss']
})
export class ItemsListComponent implements OnInit {


  constructor(private cartService: CartService) { }

  @Input() items!: Array<Item>

  removeFromCart(itemId: string | number) {
    this.cartService.removeFromCart(itemId);
  }

  ngOnInit(): void {
  }

}
