import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { PokemonItemComponent } from './components/pokemon-item/pokemon-item.component';
import { SlotComponent } from './pages/slot/slot.component';
import { PokeEntryComponent } from './pages/poke-entry/poke-entry.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    PokemonItemComponent,
    SlotComponent,
    PokeEntryComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }