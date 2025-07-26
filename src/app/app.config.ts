import {
  ApplicationConfig,
  provideZoneChangeDetection,
  importProvidersFrom,
} from '@angular/core';
import { provideRouter, withHashLocation } from '@angular/router';

import { routes } from './app.routes';
import { en_US, provideNzI18n } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { provideHttpClient } from '@angular/common/http';
import {
  provideClientHydration,
  withEventReplay,
} from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideNzConfig } from 'ng-zorro-antd/core/config';

registerLocaleData(en);

export const appConfig: ApplicationConfig = {
  providers: [
    provideNzI18n(en_US),
    provideHttpClient(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideAnimations(),
    provideClientHydration(withEventReplay()),
    provideNzConfig({ theme: { primaryColor: '#2a4254' } }),
    importProvidersFrom(FormsModule, ReactiveFormsModule),
    provideRouter(routes, withHashLocation()),
  ],
};
