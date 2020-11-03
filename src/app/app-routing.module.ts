import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { GermanyStatesComponent } from './germany-states/germany-states.component';
import { GermanyStatesEditComponent } from './germany-states-edit/germany-states-edit.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'germany-states', component: GermanyStatesComponent},
  {path: 'germany-states/:id', component: GermanyStatesEditComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
