import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PokeListComponent } from '@components/poke-list/poke-list.component';
import { PokeDetailComponent } from '@components/poke-detail/poke-detail.component';

const routes: Routes = [
  { path: 'pokedex', component: PokeListComponent },
  { path: 'pokedex/:id', component: PokeDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
