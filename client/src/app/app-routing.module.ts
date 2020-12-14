import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SlotComponent } from './pages/slot/slot.component';

const routes: Routes = [
  { path: '', component: HomePageComponent},
  { path: 'slot', component: SlotComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
