import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { PokemonItemComponent } from './components/pokemon-item/pokemon-item.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PokemonPageComponent } from './pages/pokemon-page/pokemon-page.component';
import { SlotPageComponent } from './pages/slot-page/slot-page.component';
import { MyPokemonPageComponent } from './pages/my-pokemon-page/my-pokemon-page.component';
import { PokemonItemGridComponent } from './components/pokemon-item-grid/pokemon-item-grid.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    PokemonItemComponent,
    NavbarComponent,
    PokemonPageComponent,
    SlotPageComponent,
    MyPokemonPageComponent,
    PokemonItemGridComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }