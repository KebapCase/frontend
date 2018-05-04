import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {openDialogAnimation} from '../../animations/openDialog';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
  animations: [openDialogAnimation]
})
export class ModalComponent implements OnInit {

  @Input() visibility: boolean;
  @Output() modalClose = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }


  close(): void {
    this.visibility = false;
    this.modalClose.emit();
  }
}
