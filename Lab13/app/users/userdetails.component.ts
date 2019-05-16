import { Component, OnInit } from '@angular/core';
import {DataServiceService} from "../data-service.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-userdetails',
  template:
  `
    <div>
      <img [src]="user.picture.medium">
    <p>
      {{(user.name.title| uppercase) +" " + (user.name.first| uppercase) +" " + (user.name.last| uppercase) }} 
    </p>
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
