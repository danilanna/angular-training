import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { GermanyStatesRoutingModule } from './germany-states-routing.module';

import { GermanyStatesComponent } from './germany-states.component';
import { GermanyStatesDetailComponent } from './germany-states-detail/germany-states-detail.component';
import { GermanyStatesEditComponent } from './germany-states-edit/germany-states-edit.component';


@NgModule({
  declarations: [
    GermanyStatesComponent,
    GermanyStatesDetailComponent,
    GermanyStatesEditComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    GermanyStatesRoutingModule
  ]
})
export class GermanyStatesModule { }
