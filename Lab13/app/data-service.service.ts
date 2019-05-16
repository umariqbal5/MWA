import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  constructor(public http: HttpClient) { }
  getOnlineData(){
    return this.http.get("https://randomuser.me/api/?results=10");
  }
  getCachedData(){
    return JSON.parse(localStorage.getItem("users"));
  }
  getUser(id: string){
    let users = JSON.parse(localStorage.getItem("users"));
   return users.results.find(x=> { return x.login.uuid== id});
  }
}
