import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { UserdetailsComponent } from './userdetails.component';
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [UsersComponent, UserdetailsComponent],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class UsersModule { }
