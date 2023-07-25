import { AfterContentChecked, AfterContentInit, AfterViewInit, Component, DoCheck, 
  EventEmitter, 
  Input, 
  OnChanges, 
  OnDestroy, 
  OnInit, 
  Output, 
  SimpleChanges, 
  ViewEncapsulation } from '@angular/core';
import { LoggerService } from '../logger.service';
import { SampleService } from '../service/sample.sevice';

@Component({
  selector: 'app-itemslist',
  templateUrl: './itemslist.component.html',
  styleUrls: ['./itemslist.component.css'],
  encapsulation:ViewEncapsulation.None,
})
export class ItemslistComponent implements OnInit,OnChanges,DoCheck,AfterContentInit, AfterContentChecked,AfterViewInit,OnDestroy {
 @Input() servercontent:{name:string,id:number} = {name:'',id:0};
 @Input() addStar:boolean = false;

@Output() removeServer  = new EventEmitter<number>();

constructor(private logService:LoggerService,private sampleService:SampleService){
console.log("constructor Caled!");
console.log("initems List >>>>>>>>>> "+this.sampleService.getData())
}


ngOnInit(): void {
  console.log("onInit Caled!");

}

ngOnChanges(changes: SimpleChanges): void {
  console.log("ngOnChages");
  console.log(changes);

}

ngDoCheck(): void {
  console.log("DoCheck called");
}


ngAfterContentInit(): void {
  console.log("After content init called")
}

ngAfterContentChecked(): void {
  console.log("After content checked called")
  
}

ngAfterViewInit(): void {
  console.log("After view init called")

}

ngOnDestroy(): void {
  console.log("onDestroy")
}
 btnClicked(){

this.logService.logData("component removed");
this.removeServer.emit(this.servercontent.id); 
 }
 btnClicked1(){
 
   }
}
