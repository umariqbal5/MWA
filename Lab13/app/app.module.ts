import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {RouterModule, Routes} from "@angular/router";
import {UsersComponent} from "./users/users.component";
import {UsersModule} from "./users/users.module";
import {UserdetailsComponent} from "./users/userdetails.component";
import { NotFoundComponent } from './not-found-component';

const myRoutes: Routes = [
  {path: 'users', loadChildren:'./users/users.module#UsersModule'},
  {path: '404', component: NotFoundComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(myRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
