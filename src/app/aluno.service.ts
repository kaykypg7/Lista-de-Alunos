import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Aluno } from './aluno'; // (Verifique se o caminho para 'Aluno' está correto)

@Injectable({
  providedIn: 'root'
})
export class AlunoService {
  // 1. URL centralizada
  private baseURL = "https://alunos-553527372350.southamerica-east1.run.app/api/alunos";


  constructor(private httpClient: HttpClient) { }

  // 2. Todos os métodos agora usam a variável baseURL
  getAlunosList(): Observable<Aluno[]> {
    return this.httpClient.get<Aluno[]>(`${this.baseURL}/todos`);
  }

  createAluno(aluno: Aluno): Observable<Aluno> {
    return this.httpClient.post<Aluno>(`${this.baseURL}/cadastrar`, aluno, {
      withCredentials: true
    });
  }

  getAlunoById(id: number): Observable<Aluno> {
    return this.httpClient.get<Aluno>(`${this.baseURL}/${id}`);
  }

  atualizarAluno(id: number, aluno: Aluno): Observable<Object> {
    return this.httpClient.put(`${this.baseURL}/atualizar/${id}`, aluno);
  }

  deletarAluno(id: number): Observable<Object> {
    return this.httpClient.delete(`${this.baseURL}/deletar/${id}`);
  }
}