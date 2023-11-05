import { Component } from '@angular/core';

@Component({
  selector: 'app-logger',
  templateUrl: './logger.component.html',
  styleUrls: ['./logger.component.css']
})
export class LoggerComponent {
  loggerText="testo";
  k:number=0;

  getLoggerId(){
    this.k++;
    return this.k;

  }
}
