import { Component } from '@angular/core';
import {DataServiceService} from "./data-service.service";

@Component({
  selector: 'app-root',
  template: `
    <div>
    <nav>
      <ul>
        <li>
          <a [routerLink]="['users']" >Users</a>
        </li>
      </ul>
    </nav>
    <router-outlet></router-outlet>
    </div>
  `,
  styleUrls: [],
})
export class AppComponent {
  title = 'my-first-app';
  data = null;

  constructor(private dataService: DataServiceService){
    console.log("app constructor call")
    this.dataService.getOnlineData().subscribe(data =>{
      if(!localStorage.getItem("users"))
      localStorage.setItem("users",JSON.stringify(data));
    });
  }

  ngOnInit(){

  }

}
