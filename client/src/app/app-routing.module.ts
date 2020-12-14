import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SlotComponent } from './pages/slot/slot.component';

const routes: Routes = [
  { path: 'pokemon', component: HomePageComponent},
  {
    path: '',
    redirectTo: 'pokemon',
    pathMatch: 'full'
  },
  { path: 'slot', component: SlotComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
