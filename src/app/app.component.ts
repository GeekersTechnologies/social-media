import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { RegisterService } from './register.service';
import { Router } from '@angular/router';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	title = 'DiscordApp';

	constructor(db: AngularFirestore, private auth: RegisterService, private router: Router) {
		auth.user$.subscribe(user => {
			if (user) {
				console.log(user);
				const returnUrl = sessionStorage.getItem('returnUrl');
				this.router.navigateByUrl(returnUrl);
			}
		})
	}
}
