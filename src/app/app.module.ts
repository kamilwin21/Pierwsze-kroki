import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FunkcjeComponent } from './funkcje/funkcje.component';
import { DefinicjaZmiennychComponent } from './definicja-zmiennych/definicja-zmiennych.component';
import { InterfejsyComponent } from './interfejsy/interfejsy.component';

@NgModule({
  declarations: [
    AppComponent,
    FunkcjeComponent,
    DefinicjaZmiennychComponent,
    InterfejsyComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
