import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css'],
})
export class ReactiveformComponent implements OnInit {
  loginForm: any;
  ngOnInit(): void {
    this.loginForm = new FormGroup({
      username: new FormControl(null, Validators.required),
      email: new FormControl('abc@gmail.com', [
        Validators.required,
        Validators.email,
      ]),
      password: new FormControl(null, Validators.required),
    });
  }
  onSubmit() {
    console.log(this.loginForm);
  }
}
