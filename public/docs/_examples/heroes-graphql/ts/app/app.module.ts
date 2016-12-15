// #docplaster
// #docregion
// #docregion rxjs-extensions
import './rxjs-extensions';
// #enddocregion rxjs-extensions

// #docregion v1, v2
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

// #enddocregion v1

// #docregion import-apollo
// ...
import { ApolloModule } from 'angular2-apollo';
import { client } from './client';
// ...
// #enddocregion import-apollo

// #docregion v1
import { AppComponent }         from './app.component';
import { DashboardComponent }   from './dashboard.component';
import { HeroesComponent }      from './heroes.component';
import { HeroDetailComponent }  from './hero-detail.component';
import { HeroService }          from './hero.service';
// #enddocregion v1, v2
import { HeroSearchComponent }  from './hero-search.component';
// #docregion v1, v2

// #docregion apollo-ngmodule
// ...
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    // #enddocregion v1
    // #docregion v1
    AppRoutingModule,
    ApolloModule.withClient(client)
  ],
  // #docregion search
  declarations: [
    // ...
// #enddocregion apollo-ngmodule    
    AppComponent,
    DashboardComponent,
    HeroDetailComponent,
    HeroesComponent,
  // #enddocregion v1, v2
    HeroSearchComponent
  // #docregion v1, v2
  ],
  // #enddocregion search
  providers: [ HeroService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
