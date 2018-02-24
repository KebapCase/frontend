import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  registrationForm: FormGroup;
  @Output() afterSubmitEvent = new EventEmitter();

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
    this.afterSubmitEvent.emit(true);
  }

}
