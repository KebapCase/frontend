import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  registrationForm: FormGroup;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.registrationForm = this.fb.group({
      'username': [null, Validators.required],
      'email': [null, [Validators.email, Validators.required]],
      'password': [null, Validators.required]
    });
  }

  postForm(post) {
    console.log(post);
  }

}
