import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaComponent } from './lista/lista.component';
import { CriarComponent } from './criar/criar.component';
import { AtualizarComponent } from './atualizar/atualizar.component';
import { DetalhesComponent } from './detalhes/detalhes.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaComponent,
    CriarComponent,
    AtualizarComponent,
    DetalhesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
