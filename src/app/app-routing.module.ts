import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { GermanyStatesComponent } from './germany-states/germany-states.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'germany-states', component: GermanyStatesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
