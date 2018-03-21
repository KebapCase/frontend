import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Output() loginActionEmitter = new EventEmitter();
  @Input() loginTitle: string;

  navbarOptions = new Map()
    .set('Home', '#home')
    .set('Categories', '#categories')
    .set('Popular', '#popular')
    .set('New', '#new')
    .set('About', '#about');

  constructor() {}

  ngOnInit() {
  }

  getKeys = (): string[] => Array.from(this.navbarOptions.keys());

  loginAction = (): void => {
    this.loginActionEmitter.emit();
  }

}
