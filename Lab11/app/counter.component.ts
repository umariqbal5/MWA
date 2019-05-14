import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <h2>CounterComponent</h2>
    <button  (click)="counterValue= counterValue-1" (click)="counterChange()">-</button>
    <span> 
      {{counterValue}}
    </span>
    <button  (click)="counterValue= counterValue+1" (click)="counterChange()">+</button>
  `,
  styles: []
})
export class CounterComponent implements OnInit {

  @Input() counterValue = 0;
  @Output() counterChangeEmitter = new EventEmitter();

  counterChange(){
    this.counterChangeEmitter.emit(this.counterValue);
  }
  constructor() { }

  ngOnInit() {
  }

}
