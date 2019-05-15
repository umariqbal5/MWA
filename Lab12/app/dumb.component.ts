import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-dumb',
  template: `
    <p >
      {{item.name }} - {{item.course}}
    </p>
  `,
  styles: []
})
export class DumbComponent implements OnInit {
  @Input() item;
  constructor() { }

  ngOnInit() {
  }

}
