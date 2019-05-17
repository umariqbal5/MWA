import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { UserdetailsComponent } from './userdetails.component';
import {RouterModule, Routes} from '@angular/router';
import {AppComponent} from '../app.component';
import {UserExistGuard} from '../user-exist.guard';

const myRoutes: Routes = [
  {path: '', component: UsersComponent},
  {path: 'userdetail/:uuid', component: UserdetailsComponent, canActivate: [UserExistGuard]},
]

@NgModule({
  declarations: [UsersComponent, UserdetailsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(myRoutes)
  ]
})
export class UsersModule { }
