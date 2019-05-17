import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import { Observable } from 'rxjs';
import {DataServiceService} from './data-service.service';

@Injectable({
  providedIn: 'root'
})
export class UserExistGuard implements  CanActivate{

  constructor(private dataService: DataServiceService, private router: Router){}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
    Observable<boolean> | boolean {

    const user = this.dataService.getUser(route.params.uuid);
    if (!user || !user.login) {
      this.router.navigate(['404']);
      return false;
    }

    return true;

  }
}
