import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TelaComponent } from './tela/tela.component';
import { FooterComponent } from './footer/footer.component';
import { FormularioComponent } from './tela/formulario/formulario.component';
import { GeradorColetaneaComponent } from './tela/gerador-coletanea/gerador-coletanea.component';
import {ServiceColetanea} from '../services/service-coletanea.service';

@NgModule({
  declarations: [
    AppComponent,
    TelaComponent,
    FooterComponent,
    FormularioComponent,
    GeradorColetaneaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ServiceColetanea],
  bootstrap: [AppComponent]
})
export class AppModule { }
