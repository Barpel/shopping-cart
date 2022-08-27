import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Output() passSearchTerm = new EventEmitter();

  handlePerformSearch(value: string) {
    this.passSearchTerm.emit(value);
  }

}
