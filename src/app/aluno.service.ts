import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Aluno } from './aluno';

@Injectable({
  providedIn: 'root'
})
export class AlunoService {
  // private baseURL = "http://localhost:8080/api/alunos"; // nao funciona

  constructor(private httpClient: HttpClient) { }
  getAlunosList(): Observable<Aluno[]>{
    return this.httpClient.get<Aluno[]>('http://localhost:8080/api/alunos/todos');
    //'http://localhost:8080/api/alunos/todos'
  }

  createAluno(
    aluno : Aluno): Observable<Aluno>
  {
    return this.httpClient.post<Aluno>('http://localhost:8080/api/alunos/cadastrar',aluno,{
      withCredentials: true
    });
  }
  getAlunoById(id:number): Observable<Aluno>{
    return this.httpClient.get<Aluno>(`http://localhost:8080/api/alunos/${id}`)
  }
  atualizarAluno(id:number, aluno: Aluno): Observable<Object>{
    return this.httpClient.put(`http://localhost:8080/api/alunos/atualizar/${id}`, aluno)
  }
  deletarAluno(id:number): Observable<Object>{
    return this.httpClient.delete(`http://localhost:8080/api/alunos/deletar/${id}`)
  }
  
}

