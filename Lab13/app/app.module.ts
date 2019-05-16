import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {RouterModule, Routes} from "@angular/router";
import {UsersComponent} from "./users/users.component";
import {UsersModule} from "./users/users.module";
import {UserdetailsComponent} from "./users/userdetails.component";

const My_Routes: Routes = [
  // {path: '', component: AppComponent},
  {path: 'users', component: UsersComponent},
  {path: 'userdetail/:uuid', component: UserdetailsComponent}
]

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    UsersModule,
    RouterModule.forRoot(My_Routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
