import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.css']
})
export class PreviewComponent implements OnInit {

  @Input('title') title: string;
  @Input('description') description: string;
  @Input('daysLeft') daysLeft: number;

  constructor() {
  }

  ngOnInit() {
  }

}
