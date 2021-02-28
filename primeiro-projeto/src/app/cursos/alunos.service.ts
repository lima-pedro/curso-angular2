import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlunosService {

  constructor() { }

  getAlunos () {
    return [
      'Pedro Lima',
      'Mayara Lima',
      'Nicolas Lima'
    ];
  }
}
