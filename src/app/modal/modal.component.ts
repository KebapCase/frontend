import {Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {animate, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
  animations: [
    trigger('dialog', [
      transition('void => *', [
        style({ transform: 'translateY(-200px)' }),
        animate(200)
      ]),
      transition('* => void', [
        animate(150, style({ transform: 'translateY(-200px)' }))
      ])
    ])
  ]
})
export class ModalComponent implements OnInit {

  @Input() visibility: boolean;
  @Output() modalClose = new EventEmitter();

  constructor() {}

  ngOnInit() {}


  close(): void {
    this.visibility = false;
    this.modalClose.emit();
  }
}
