import {Component, OnInit, Input, ElementRef, Output, EventEmitter} from '@angular/core';
import {animate, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
  animations: [
    trigger('dialog', [
      transition('void => *', [
        style({ transform: 'scale3d(.3, .3, .3)' }),
        animate(100)
      ]),
      transition('* => void', [
        animate(100, style({ transform: 'scale3d(.0, .0, .0)' }))
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
