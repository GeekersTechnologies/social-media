import { Injectable } from '@angular/core';
import { Registration } from './registration';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';
import { resolve } from 'url';
import { reject } from 'q';
import { Observable } from 'rxjs';
import { Router } from "@angular/router";

@Injectable({
	providedIn: 'root'
})
export class RegisterService {

	user$: Observable<firebase.User>;
	constructor(public afAuth: AngularFireAuth, private router: Router) {
		this.user$ = afAuth.authState;
	}

	doRegister(value) {
		return new Promise<any>((resolve, reject) => {
			firebase.auth().createUserWithEmailAndPassword(value.email, value.password)
				.then(res => {
					resolve(res);
				}, err => reject(err))
		})
	}

	logout() {
		this.afAuth.auth.signOut()
			.then((res) => this.router.navigate(['/login']));
	}
}
