import { Injectable } from '@angular/core';
import { Escolaridade } from '../model/escolaridade';

@Injectable({
  providedIn: 'root'
})
export class EscolaridadeService {

  getEscolaridades() {
    return [
     new Escolaridade(1, 'Infantil' ),
     new Escolaridade(2, 'Fundamental' ),
     new Escolaridade(3, 'Médio' ),
     new Escolaridade(4, 'Superior' )
    ];
  }

  constructor() { }
}
