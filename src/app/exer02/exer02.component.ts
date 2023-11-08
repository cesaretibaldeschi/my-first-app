import { Component } from '@angular/core';

@Component({
  selector: 'app-exer02',
  templateUrl: './exer02.component.html',
  // styleUrls: ['./exer02.component.css']
  styles:['.grande{color:white;font-weight:bold;}'],
})
export class Exer02Component {
  DisplayText:string="";
  Toggles=[];
  i:number=0;
  toggleStatus:string="off";

  getToggleStatus(){
    return this.toggleStatus;
  }

  onToggleParagraph(){
    this.i++;
    if (this.toggleStatus==="off")
    {
      this.toggleStatus="on";
      this.DisplayText="Tuna fish";

    }else{
      this.toggleStatus="off";
      this.DisplayText="";
    }
    this.Toggles.push(this.i)
  }


  getBgColor(iToggle:number){
    if(iToggle>=4){
      return "darkblue";
    }else{
      return "pink";
    }
  }

}
