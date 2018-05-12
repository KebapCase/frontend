import {Component, Input, OnInit} from '@angular/core';
import {CustomEvent} from '../../models/event';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.css']
})
export class PreviewComponent implements OnInit {

  @Input() event: CustomEvent;


  constructor() {
  }

  ngOnInit() {
  }

}
