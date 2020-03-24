import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BeersComponent} from './beers/beers.component';
import {NavbarComponent} from './navbar/navbar.component';
import { MaterialModule } from './core/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {BeersService} from './beers/beers.service';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {AuthInterceptor} from './auth.interceptor';
import { UserComponent } from './user/user.component';
import {UserService} from './user/user.service';
import { BeerCardComponent } from './beer-card/beer-card.component';


@NgModule({
  declarations: [
    AppComponent,
    BeersComponent,
    NavbarComponent,
    UserComponent,
    UserComponent,
    BeerCardComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }, BeersService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
