import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import '@mdi/font/css/materialdesignicons.min.css';




bootstrapApplication(AppComponent, appConfig,)
  .catch((err) => console.error(err));
