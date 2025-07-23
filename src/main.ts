import { bootstrapApplication } from '@angular/platform-browser';
import { DefaultLayout } from './app/default-layout/default-layout';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import { importProvidersFrom } from '@angular/core';
import { FormsModule } from '@angular/forms'; 


bootstrapApplication(DefaultLayout, {
  providers: [
    provideRouter(routes),
    importProvidersFrom(FormsModule),
  ],
});
