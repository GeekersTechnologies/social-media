// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
	apiKey: "AIzaSyAx0zR6m3cIWyouKZ-PREM0drKFVFRbOfQ",
    authDomain: "social-media-be71f.firebaseapp.com",
    databaseURL: "https://social-media-be71f.firebaseio.com",
    projectId: "social-media-be71f",
    storageBucket: "social-media-be71f.appspot.com",
    messagingSenderId: "694697947292"
  }
};

/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
