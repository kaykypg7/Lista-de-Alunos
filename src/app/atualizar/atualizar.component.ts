import { Component, OnInit } from '@angular/core';
import { AlunoService } from '../aluno.service';
import { Aluno } from '../aluno';
import { ActivatedRoute, Router } from '@angular/router';
import { error } from 'console';

@Component({
  selector: 'app-atualizar',
  templateUrl: './atualizar.component.html',
  styleUrl: './atualizar.component.css'
})
export class AtualizarComponent implements OnInit{
  aluno : Aluno = new Aluno();
  id!:number;

constructor(private alunoService : AlunoService, 
  private route : ActivatedRoute,
  private router : Router){

}

ngOnInit(): void {
  this.id = this.route.snapshot.params['id'];
    this.alunoService.getAlunoById(this.id).subscribe({
      next : data => {
        this.aluno = data;
      },
      error : error => console.log(error)
    })
}
onSubmit(){
this.alunoService.atualizarAluno(
    this.id,
    this.aluno
  ).subscribe({ next : data => {
    console.log(data)
      this.goToLista();
    }, 
    error : error => console.log(error)
  }) 

 
}

goToLista() {  
  this.router.navigate(['/alunos']);
}
}
