import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss']
})
export class SearchInputComponent implements OnInit {

  constructor() {
  }

  @Output() performSearch = new EventEmitter();
  @Input() searchValue: string = '';

  handleSearch(value: string) {
    this.performSearch.emit(value);
  }

  ngOnInit(): void {
  }

}
