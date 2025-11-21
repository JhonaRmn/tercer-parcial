import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Footer } from './components/commmos/footer/footer';
import { Header } from './components/commmos/header/header';
import { Home } from './components/pages/home/home';
import { Introduccion } from './components/pages/introduccion/introduccion';
import { Precedentes } from './components/pages/precedentes/precedentes';

@NgModule({
  declarations: [
    App,
    Footer,
    Header,
    Home,
    Introduccion,
    Precedentes
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [App]
})
export class AppModule { }
