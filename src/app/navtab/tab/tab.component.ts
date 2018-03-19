import { Component, Input, OnInit } from '@angular/core';
import { TabsComponent } from '../tabs/tabs.component';
import {animate, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css'],
  animations: [
    trigger('fadeIn', [
      transition('void => *', [
        style({opacity: 0}),
        animate(400)
      ])
    ])
  ]
})
export class TabComponent {

  @Input() tabTitle: string;
  active: boolean;

  constructor(tabs: TabsComponent) {
    this.active = false;
    tabs.addTab(this);
  }

}
