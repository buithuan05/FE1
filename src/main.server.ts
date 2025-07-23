import { bootstrapApplication } from '@angular/platform-browser';
import { DefaultLayout } from './app/app';
import { config } from './app/app.config.server';

const bootstrap = () => bootstrapApplication(DefaultLayout, config);

export default bootstrap;
