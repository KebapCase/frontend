import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-gen-information',
  templateUrl: './gen-information.component.html',
  styleUrls: ['./gen-information.component.css']
})
export class GenInformationComponent implements OnInit {

  userId: string;

  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(params => this.userId = params['id']);
  }

  ngOnInit() {
  }

}
