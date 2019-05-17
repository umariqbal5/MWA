import { Component, OnInit } from '@angular/core';
import {DataServiceService} from "../data-service.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-userdetails',
  template:
  `
    <div *ngIf="user">
      <img [src]="user.picture.medium">
    <p>
      {{(user.name.title| uppercase) +" " + (user.name.first| uppercase) +" " + (user.name.last| uppercase) }} 
    </p>
      <p>{{user.login.username}}</p>
      <p>{{user.email}}</p>
    </div>
    <div *ngIf="!user">
      User Details not found
    </div>
  `,
  styles: []
})
export class UserdetailsComponent implements OnInit {
  user = null;
  id: string;
  constructor(private dataService: DataServiceService, private route: ActivatedRoute) {
  route.params.subscribe(params => this.id = params['uuid']);
  }

  ngOnInit() {
    this.user = this.dataService.getUser(this.id);
    console.log('user',this.user)
  }

}
