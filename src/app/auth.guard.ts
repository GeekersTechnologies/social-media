import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { RegisterService } from './register.service';
import { map } from 'rxjs/operators';

@Injectable({
	providedIn: 'root'
})
export class AuthGuard implements CanActivate {
	constructor(private afAuthService: RegisterService, private router: Router) { }

	canActivate(route, state: RouterStateSnapshot) {
		return this.afAuthService.user$.pipe(
			map(user => {
				if (user)
					return true;

				this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
				return false;
			})
		);
	}
}
