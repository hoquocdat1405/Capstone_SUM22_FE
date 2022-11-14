// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  // mockApiUrl: 'http://localhost:3000/'
  mockApiUrl: 'https://api.qick.tech/api/',
  CLIENT_ID: '335727496797-ni5931lv7pm1g6k9jif5p24365egcilf.apps.googleusercontent.com',
  CLIENT_SECRET: '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',
  REDIRECT_URI: 'https://developers.google.com/oauthplayground',

  REFRESH_TOKEN: '1//04lIaPgp7JXq3CgYIARAAGAQSNwF-L9Irh8TTzwSYtAU88rKkGuYbvqYirIlNnlkaf0nsL-3uwcixsGq4yFIKrsxFtGE0I4stHnY',
  firebase: {
    apiKey: "AIzaSyCCf_yntBXQuNnWvw9me0G8Fha1e4JdoVs",
    authDomain: "qick-admission.firebaseapp.com",
    projectId: "qick-admission",
    databaseURL: 'https://qick-admission.firebaseio.com',
    storageBucket: "qick-admission.appspot.com",
    messagingSenderId: "205172883092",
    appId: "1:205172883092:web:ad713f00f90f4c2614fe81",
    measurementId: "G-Q4Z5XDEEY8",
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
