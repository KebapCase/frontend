import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  modalVisibility: boolean;

  constructor () {}

  openModal() {
    this.modalVisibility = true;
  }

  closeModal() {
    this.modalVisibility = false;
  }

}
