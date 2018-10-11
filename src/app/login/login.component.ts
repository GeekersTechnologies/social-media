import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegisterService } from '../register.service';
import * as firebase from 'firebase';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { FirebaseApp } from '@angular/fire';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})
export class LoginComponent {

	loginForm: FormGroup;

	firebaseuser: Observable<firebase.User>

	constructor(private fb: FormBuilder, private afauth: AngularFireAuth, private route: ActivatedRoute, private router: Router) {
		this.loginForm = fb.group({
			username: [null, Validators.required],
			password: [null, Validators.compose([Validators.required, Validators.minLength(8), Validators.maxLength(30)])],
		});
		this.firebaseuser = afauth.authState;
	}

	loginWithGoogle() {
		const returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/';
		sessionStorage.setItem('returnUrl', returnUrl);
		// this.afauth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
		this.afauth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
	}

	loginWithFacebook() {
		const returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/';
		sessionStorage.setItem('returnUrl', returnUrl);
		// this.afauth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
		this.afauth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider());
	}

	loginWithEmail() {
		const returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/';
		sessionStorage.setItem('returnUrl', returnUrl);
		// this.afauth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
		// this.afauth.auth.signInWithEmailAndPassword();
	}

}
