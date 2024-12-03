import { Component, OnInit } from '@angular/core';
import { Aluno } from '../aluno';
import { ActivatedRoute, Router } from '@angular/router';
import { AlunoService } from '../aluno.service';

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.component.html',
  styleUrl: './detalhes.component.css'
})
export class DetalhesComponent implements OnInit {

id!:number;
aluno : Aluno = new Aluno();

constructor(
  private alunoService : AlunoService,
  private route : ActivatedRoute,
){
  
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

}
