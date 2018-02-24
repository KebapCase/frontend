import {Component, OnInit, Input, ElementRef} from '@angular/core';
import {ModalService} from '../services/modal/modal.service';
import * as $ from 'jquery';
import { JQuery } from 'jquery';

@Component({
  selector: 'app-modal',
  moduleId: module.id.toString(),
  template: '<ng-content></ng-content>'
})
export class ModalComponent implements OnInit {

  @Input() id: string;
  private element: JQuery;

  constructor(private modalService: ModalService, private elem: ElementRef) {
    this.element = $(elem.nativeElement);
  }

  ngOnInit() {
    if (!this.id) {
      return;
    }
    const modal = this;
    this.element.appendTo('body');
    this.element.on('click', function (e: any) {
      const target = $(e.target);
      if (!target.closest('.modal-body').length) {
        modal.close();
      }
    });
    this.modalService.add(this);
  }

  open(): void {
    console.log('keeeeek');
    this.element.show();
    $('body').addClass('modal-open');
  }

  close(): void {
    this.element.hide();
    $('body').removeClass('modal-open');
  }
}
