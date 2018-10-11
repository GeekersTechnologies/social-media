import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegisterService } from '../register.service';
import { resolve } from 'url';
import { reject } from 'q';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';
import { Router } from '@angular/router';

@Component({
	selector: 'app-register',
	templateUrl: './register.component.html',
	styleUrls: ['./register.component.css']
})
export class RegisterComponent {

	registerForm: FormGroup;

	constructor(private fb: FormBuilder, public afAuth: AngularFireAuth, private AuthService: RegisterService, private router: Router) {
		this.registerForm = fb.group({
			username: [null, Validators.required],
			first_name: [null, Validators.required],
			last_name: [null, Validators.required],
			email: [null, Validators.compose([Validators.required, Validators.email])],
			password: [null, Validators.compose([Validators.required, Validators.minLength(8), Validators.maxLength(30)])],
			confirm_password: [null, Validators.compose([Validators.required, Validators.minLength(8), Validators.maxLength(30)])]
		});
	}

	onSubmit() {
		// console.log(this.registerForm.value);
		this.AuthService.doRegister(this.registerForm.value)
			.then(res => {
				console.log(res);
				// this.errorMessage = "";
				// this.successMessage = "Your account has been created";
				this.router.navigate(['/channels']);
			}, err => {
				console.log(err);
				// this.errorMessage = err.message;
				// this.successMessage = "";
			});
		  
		// );
	}
}
