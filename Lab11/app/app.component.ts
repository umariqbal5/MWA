import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>App Component</h1>
    
    <app-counter [counterValue]="counter_init_value" (counterChangeEmitter)="showChange1($event)"></app-counter>
    <p>Component 1 Counter Value = {{counter_value1}}</p>
    <app-counter (counterChangeEmitter)="showChange2($event)"></app-counter>
    <p>Component 2 Counter Value = {{counter_value2}}</p>
   
  `,
  styleUrls: []
})
export class AppComponent {
  title = 'my-first-app';
  counter_init_value =7;
  counter_value1 = "";
  showChange1(e){
  this.counter_value1 = e;
  }

  counter_value2 = "";
  showChange2(e){
    this.counter_value2 = e;
  }
}
