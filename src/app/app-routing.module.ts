import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaComponent } from './lista/lista.component';
import { CriarComponent } from './criar/criar.component';
import { AtualizarComponent } from './atualizar/atualizar.component';
import { DetalhesComponent } from './detalhes/detalhes.component';

const routes: Routes = [
  {path :'alunos', component: ListaComponent},
  {path: 'criar', component: CriarComponent},
  // caminho para caso nao seja digitado o nome na URL
  {path :'', redirectTo: 'alunos', pathMatch: "full"},
  {path:'atualizar/:id', component : AtualizarComponent},
  {path:'detalhes/:id', component: DetalhesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
