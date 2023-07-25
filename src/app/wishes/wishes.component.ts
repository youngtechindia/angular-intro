import { Component } from '@angular/core';

@Component({
  selector: 'app-wishes',
  templateUrl:'./wishes.component.html',
  styleUrls: ['./wishes.component.css']
})
export class WishesComponent {

  title:string="My component";
  city:string="Hyderabad";
  isDisabled = false;

  buttonClicked(){
   console.log("Button clicked"); 
  }

}
