import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-authorize-modal',
  templateUrl: './authorize-modal.component.html',
  styleUrls: ['./authorize-modal.component.css']
})
export class AuthorizeModalComponent implements OnInit {

  @Output() modalClose = new EventEmitter();
  isAuthenticationModalVisible = false;

  constructor() {
  }

  ngOnInit() {
  }

  afterSubmitHandler(value: boolean) {
      this.modalClose.emit(true);
  }

  open() {
    this.isAuthenticationModalVisible = true;
  }

  close() {
    this.isAuthenticationModalVisible = false;
    this.modalClose.emit(false);
  }
}
