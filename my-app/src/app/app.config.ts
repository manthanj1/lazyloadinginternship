import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app.component';


export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(),
    provideRouter([]) 
  ]
};


