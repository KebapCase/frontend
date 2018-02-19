import { Component, OnInit } from '@angular/core';
import {RegistrationModel} from "../../models/RegistrationModel";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  registrationForm: FormGroup;
  model: RegistrationModel = new RegistrationModel();

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.registrationForm = this.fb.group({
      'username': [this.model.userName, Validators.required],
      'email': [this.model.email, [Validators.email, Validators.required]],
      'password': [this.model.password, Validators.required]
    });
  }

}
