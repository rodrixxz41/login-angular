import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideFirebaseApp(() =>
      initializeApp({
        apiKey: 'AIzaSyAMhQc3Q3sIQubivdcnUTULTDQb1ViMfkc',
        authDomain: 'login-angular-bd1a0.firebaseapp.com',
        projectId: 'login-angular-bd1a0',
        storageBucket: 'login-angular-bd1a0.firebasestorage.app',
        messagingSenderId: '367215889036',
        appId: '1:367215889036:web:5fb8a7b24daa8ae47109a9',
      }),
    ),
    provideAuth(() => getAuth()),
  ],
};
