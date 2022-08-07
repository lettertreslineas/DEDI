import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ParteSuperiorComponent } from './parte-superior/parte-superior.component';
import { RouterModule } from '@angular/router';
import { DedicatoriasComponent } from './dedicatorias/dedicatorias.component';




@NgModule({
  imports:      [ BrowserModule, FormsModule, RouterModule.forRoot([{path: '', component: DedicatoriasComponent},])],
  declarations: [ AppComponent,  ParteSuperiorComponent, DedicatoriasComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
