import { Component } from '@angular/core';
import { SampleService } from './service/sample.sevice';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [SampleService],
})
export class AppComponent {
  title = 'Young tech india';
  name = 'Hello';

  constructor(private sampleService: SampleService, private router: Router) {
    console.log('-->>>>>>>>' + this.sampleService.getData());
    this.sampleService.setData('xyz');
    console.log('After set data-->>>>>>>>' + this.sampleService.getData());
  }

  onSubmit(form: NgForm) {
    console.log(form);
  }
}
