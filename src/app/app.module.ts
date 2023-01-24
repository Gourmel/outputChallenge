
// j'ai ajouté FormsModule dans les imports car il est nécessaire 
// pour utiliser la directive ngModel dans le formulaire.

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CreateOnomatopiaComponent } from './create-onomatopia/create-onomatopia.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateOnomatopiaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
