import { Component, Input, OnInit } from '@angular/core';
import { TabsComponent } from '../tabs/tabs.component';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css']
})
export class TabComponent {

  @Input() tabTitle: string;
  active: boolean;

  constructor(tabs: TabsComponent) {
    this.active = false;
    tabs.addTab(this);
  }

}
