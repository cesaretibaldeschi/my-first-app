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
DisplayText="";
TextVisibility= "none";
Toggles=[];



  constructor(){

    setTimeout(
      () =>{
        this.allowNewServer=true;
      },
    2000)
  }

ngOnInit(): void {

}

onToggleParagraph(){

  if(this.TextVisibility==="none"){
    this.TextVisibility="block";
    this.DisplayText="Secret password = Tuna";

  }else{
    this.TextVisibility="none";
    this.DisplayText="";
  }

  this.Toggles.push(this.TextVisibility)
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
