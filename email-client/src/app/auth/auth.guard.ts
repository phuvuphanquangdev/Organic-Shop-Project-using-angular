import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { CanLoad, Route, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { skipWhile, take, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad {
  constructor(private authService: AuthService, private router: Router) {}

  // if you return a observable it needs to be marked as complete....
  // which is done by take operator....
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
    return this.authService.signedin$.pipe(
      // skip which value are null...
      skipWhile(value => value === null),
      // take only one and the mark the observable as complete..
      take(1),
      tap((authenticated) => {
        if(!authenticated){
          this.router.navigateByUrl('/');
        }
      })
    );
  }
}
