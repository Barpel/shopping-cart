import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  constructor() { }
  @Input() shouldShowModal: boolean = false;
  @Input() text: string = '';
  @Output() shouldCloseModal = new EventEmitter()

  handleModalClick() {
    this.shouldCloseModal.emit(true);
  }

  ngOnInit(): void {
  }

}
