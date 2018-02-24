import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-authorize-modal',
  templateUrl: './authorize-modal.component.html',
  styleUrls: ['./authorize-modal.component.css']
})
export class AuthorizeModalComponent implements OnInit {

  @Output() authorizeComplited = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  afterSubmitHandler(value: boolean) {
    if (value === true) {
      this.authorizeComplited.emit();
    }
  }
}
