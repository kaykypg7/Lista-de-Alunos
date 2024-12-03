import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlunoService } from '../aluno.service';
import { Aluno } from '../aluno';
import { error } from 'console';
@Component({
  selector: 'app-criar',
  templateUrl: './criar.component.html',
  styleUrl: './criar.component.css'
})
export class CriarComponent implements OnInit {
  aluno : Aluno = new Aluno();

  constructor(
    private alunoService : AlunoService,
    private router : Router){}

    saveAluno(){
          this.alunoService.createAluno(this.aluno).subscribe({next : data =>{
            console.log(data);
              this.goToLista();
            },
            error: error =>console.log(error)

          });
    }
goToLista(){
  this.router.navigate(['/alunos']);
}



onSubmit(){
  console.log(this.aluno)
this.saveAluno();
}
ngOnInit(): void {
}


  
}
