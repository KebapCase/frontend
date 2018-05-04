import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html'
})
export class SignUpComponent implements OnInit {

  registrationForm: FormGroup;
  @Output() afterSubmitEvent = new EventEmitter();

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.registrationForm = this.fb.group({
      'firstName': [null, Validators.required],
      'secondName': [null],
      'email': [null, [Validators.email, Validators.required]],
      'password': [null, [Validators.required, Validators.minLength(3)]]
    });
  }

  postForm(post) {
    console.log(post);
    this.afterSubmitEvent.emit(true);
  }

}
