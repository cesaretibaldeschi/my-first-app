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
  textVisible:boolean=false;

  getToggleStatus(){
    return this.toggleStatus;
  }

  onToggleParagraph(){
    this.i++;
    if (this.toggleStatus==="off")
    {
      this.toggleStatus="on";
      this.DisplayText="Tuna fish";
      this.textVisible=true;

    }else{
      this.toggleStatus="off";
      this.DisplayText="";
      this.textVisible=false;

    }
    // this.Toggles.push(this.i)
    this.Toggles.push(new Date())
  }


  getBgColor(iToggle:number){
    if(iToggle>=4){
      return "darkblue";
    }else{
      return "pink";
    }
  }

}
