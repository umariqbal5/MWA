import { Component, OnInit } from '@angular/core';
import {DataServiceService} from "../data-service.service";

@Component({
  selector: 'app-users',
  template: `
    <table *ngIf="users">
      <tr><th>Name</th> <th>Email</th></tr>
      <tr *ngFor="let user of users">
        <td>
         <a [routerLink]="['/userdetail/', user.login.uuid]">{{user.name.first}} {{user.name.last}}</a> 
        </td>
        <td>
          {{user.email}}
        </td>
      </tr>
    </table>
  `,
  styles: []
})
export class UsersComponent implements OnInit {

  users= null;
  constructor(private dataService: DataServiceService) {
    let data = this.dataService.getCachedData();
    this.users = data.results;

  }

  ngOnInit() {

  }

}
