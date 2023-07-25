import { Component } from '@angular/core';
import { SampleService } from './service/sample.sevice';

@Component({
  selector: 'app-root', 
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[SampleService]
})
export class AppComponent {
  title = 'Young tech india';
  name = "Hello";

  constructor(private sampleService:SampleService){
    console.log("-->>>>>>>>"+this.sampleService.getData());
    this.sampleService.setData("xyz");
    console.log("After set data-->>>>>>>>"+this.sampleService.getData());
  }

}
