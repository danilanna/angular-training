import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { GermanyStatesComponent } from './germany-states/germany-states.component';
import { GermanyStatesDetailComponent } from './germany-states-detail/germany-states-detail.component';
import { InMemoryService } from './in-memory.service';
import { GermanyStatesEditComponent } from './germany-states-edit/germany-states-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GermanyStatesComponent,
    GermanyStatesDetailComponent,
    GermanyStatesEditComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryService),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
