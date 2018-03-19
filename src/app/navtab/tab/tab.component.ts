import { Component, Input, OnInit } from '@angular/core';
import { TabsComponent } from '../tabs/tabs.component';
import {fadeInAnimation} from '../../animations/fadeIn';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css'],
  animations: [fadeInAnimation]
})
export class TabComponent {

  @Input() tabTitle: string;
  active: boolean;

  constructor(tabs: TabsComponent) {
    this.active = false;
    tabs.addTab(this);
  }

}
