import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { AngularFireAuth } from '@angular/fire/auth'; 

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  constructor(
    private afAuth: AngularFireAuth,
    private router: Router
  ){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.afAuth.authState.pipe(
      //ログイン状態を取得
      take(1),
      map(user => {
        if (user !== null){
          //ログインしていた場合、userにユーザの情報が入る。
          return true;
        }else{
          this.router.navigate(['/login']);
          return false;
        }
      })
    );
  }
  
}
