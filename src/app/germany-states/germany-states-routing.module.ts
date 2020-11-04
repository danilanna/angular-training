import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GermanyStatesComponent } from './germany-states.component';
import { GermanyStatesEditComponent } from './germany-states-edit/germany-states-edit.component';

const routes: Routes = [
  {path: 'germany-states', component: GermanyStatesComponent},
  {path: 'germany-states/:id', component: GermanyStatesEditComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GermanyStatesRoutingModule { }
