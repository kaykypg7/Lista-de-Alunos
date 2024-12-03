import { Component, OnInit } from '@angular/core';
import { Aluno } from '../aluno';
import { AlunoService } from '../aluno.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrl: './lista.component.css'
})
export class ListaComponent implements OnInit{
  alunos : Aluno[] = [];

  constructor(private alunoService: AlunoService,
    private router : Router
  ){

  }
  ngOnInit(): void {
        this.getAlunos();
  }

  private getAlunos(){
    this.alunoService.getAlunosList().subscribe(data =>{
      this.alunos = data;
    })
  }


    // this.alunos = [
    //      {  "id": 1,  
    //       "nome": "Kayky",  
    //       "sobrenome": "Carvalho", 
    //       "email": "kayky@gmail.com"  
    //     },
    //      {  "id": 2,  
    //       "nome": "eu",  
    //       "sobrenome": "eu",  
    //       "email": "eu@gmail.com"
    //     }
    //    ]


  


atualizarAluno(id: number){
    this.router.navigate(['atualizar', id]);
  }

deletarAluno(id:number){
  this.alunoService.deletarAluno(id).subscribe(data => {
    console.log(data)
    this.getAlunos();
  })
}

alunoDetalhes(id:number){
  this.router.navigate(['detalhes', id]);
}
}
