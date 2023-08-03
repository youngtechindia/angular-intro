import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent {
  @ViewChild('f') signupForm: any = {};
  submittedValues: any = null;

  onSubmit() {
    console.log(this.signupForm);
    this.submittedValues = this.signupForm.value;
    this.signupForm.reset();
  }
}
