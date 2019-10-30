import { RouterModule, Routes } from '@angular/router';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//servicios
import { NotesService } from './notes.service';

import { AppRoutingModule } from './app-routing.module';

import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { EvaluacionComponent } from './evaluacion/evaluacion.component';

const routes: Routes = [
  { path: 'evaluacion', component: EvaluacionComponent }
];



@NgModule({
  declarations: [
    AppComponent,
    EvaluacionComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    AppRoutingModule
  ],
  providers: [
    NotesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
