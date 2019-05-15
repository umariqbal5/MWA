import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>App Component</h1>
    
    <div *ngFor="let item of data">
      <app-dumb [item]="item"></app-dumb>
    </div>
    <div>
      <h1 [IsVisible]="val">It suppose to hidden if IsVisible False</h1>
    </div>
  `,
  styleUrls: []
})
export class AppComponent {
  title = 'my-first-app';
  data = [{name: "Umar",course:"MWA"},{name: "Ali",course:"STC"},{name: "Tai",course:"Data Science"},{name: "Sandeep",course:"WAA"}];
  val = false;
}
