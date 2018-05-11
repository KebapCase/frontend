import { Component, OnInit } from '@angular/core';
import { InMemoryDataService } from '../../in-memory-data.service';
import { Event } from '../../models/event';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  events: Event[];
  constructor() { }

  ngOnInit() {
    this.events = InMemoryDataService.getEvents();
  }

}
