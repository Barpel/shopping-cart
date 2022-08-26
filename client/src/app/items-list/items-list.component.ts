import { Component, OnInit } from '@angular/core';
import { Item } from '../items';
import mockItems from '../mock-items.json';


@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.scss']
})
export class ItemsListComponent implements OnInit {
  items: Array<Item> = mockItems;

  constructor() { }

  ngOnInit(): void {
  }

}
