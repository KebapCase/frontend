import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {LogIn} from '../../models/LogIn';

@Component({
  selector: 'app-sing-in',
  templateUrl: './sing-in.component.html',
  styleUrls: ['./sing-in.component.css']
})
export class SingInComponent implements OnInit {

  loginForm: FormGroup;
  model: LogIn = new LogIn();

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      'username': [this.model.userName, Validators.required],
      'password': [this.model.password, Validators.required]
    });
  }

}
