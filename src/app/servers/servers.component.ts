import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit{
allowNewServer=false;
serverName='Test Server';
serverCreationStatus="No server was created."
username="";
serverCreated=false;
servers=["Test Server", "Test Server 2"];




  constructor(){

    setTimeout(
      () =>{
        this.allowNewServer=true;
      },
    2000)
  }

ngOnInit(): void {

}



onCreateServer(){
  this.serverCreated=true;
  this.servers.push(this.serverName);
  this.serverCreationStatus="The server " + this.serverName + " was created.";
}

onRemoveServer(){
  this.serverCreationStatus="The server " + this.serverName + " was removed.";
}



onUpdateServerName(event:Event){
  //console.log(event)
  this.serverName = (<HTMLInputElement>event.target).value;
  //console.log(this.serverName)
}

}
