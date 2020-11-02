import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { GermanyStatesComponent } from './germany-states/germany-states.component';
import { GermanyStatesDetailComponent } from './germany-states-detail/germany-states-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GermanyStatesComponent,
    GermanyStatesDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
