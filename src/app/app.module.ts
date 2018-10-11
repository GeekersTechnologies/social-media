import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ChannelsComponent } from './channels/channels.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { RegisterService } from './register.service';
import { LoginComponent } from './login/login.component';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';

import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { RouterModule, Router, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
	{ path: '', component: RegisterComponent},
	{ path: 'login', component: LoginComponent},
	{ path: 'channels', component: ChannelsComponent, canActivate: [AuthGuard]}
];

@NgModule({
  declarations: [
    AppComponent,
    ChannelsComponent,
    RegisterComponent,
    LoginComponent
  ],
  imports: [
	BrowserModule,
	FormsModule,
	ReactiveFormsModule,
	AngularFireModule.initializeApp(environment.firebase),
	AngularFirestoreModule,
	AngularFireAuthModule,
	RouterModule.forRoot(routes),
  ],
  providers: [
	  RegisterService,
	  AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
