import { Component, ElementRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { LoggerService } from '../logger.service';
import { SampleService } from '../service/sample.sevice';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css'],
  encapsulation:ViewEncapsulation.None,
   providers:[SampleService]
})

export class ServerComponent {


 serverName:string = "";
  servers: {name:string,id:number}[] = [];
serverObj = {name:"hello",id:1};

// @ViewChild('serverName') myServerName!:ElementRef;

// @ViewChild('serverName1') myServerName1!:ElementRef;
constructor(private logService:LoggerService,private sampleServce:SampleService){
 
  console.log("in server>>>>>> "+this.sampleServce.getData());

}

  addServer(){
   // console.log(this.myServerName);
    this.servers.push({name:this.serverName,id:this.servers.length});
    this.serverName = "";
    this.logService.logData("server created and called using dependency injection")
  }

  myButtonEVent(event:{name:string}){
    alert(888)
    console.log(event);
  }

  getColor(){
    if(this.servers.length>3){
      return 'red';
    }
    
    return this.servers.length>0 ?'green':'' ;
  }

  removeItem(id:number){
    
    console.log(id);
    let index = this.servers.findIndex(data=> data.id===id);

    this.servers.splice(index,1);

   
  }

}
