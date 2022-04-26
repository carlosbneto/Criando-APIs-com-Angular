import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Curso } from './curso';

@Injectable({
  providedIn: 'root'
})
export class CursoService {

  //URL
  url = "https://localhost/api/php/"

  //Vetor
  //Vetor
  vetor: Curso[] = [];

  //Construtor
  constructor(private http:HttpClient) { }

  //Obter todos os cursos
  
    /*
    Error: src/app/curso/curso.service.ts:25:22 - error TS7053: Element implicitly has an 'any' type because expression of type '"cursos"' can't be used to index type 'Object'.
  Property 'cursos' does not exist on type 'Object'.

    34         this.vetor = res["cursos"];
                        ~~~~~~~~~~~~~
    */

  obterCursos():Observable<Curso[]>{
    return this.http.get(this.url+"listar").pipe(
      map((res) =>{
        this.vetor = res['cursos'];
        return this.vetor; 
      })
    )
  }

}
