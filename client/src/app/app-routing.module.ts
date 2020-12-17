import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { PokemonPageComponent } from './pages/pokemon-page/pokemon-page.component';
import { MyPokemonPageComponent } from './pages/my-pokemon-page/my-pokemon-page.component';
import { SlotPageComponent } from './pages/slot-page/slot-page.component';

const routes: Routes = [
  { path: 'pokedex', component: HomePageComponent},
  { path: '', redirectTo: 'pokedex', pathMatch: 'full' },
  { path: 'gacha', component: SlotPageComponent},
  { path: 'pokemon/:pokemon_id', component: PokemonPageComponent},
  { path: 'my-pokemon', component: MyPokemonPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
