import { Component, OnInit } from '@angular/core';

import { AlunosService } from './alunos.service';

// O template inline só deve ser utilizado até 3 linhas
// Para utilizá-lo dentro dos metadados use template: `dados do template` , utilizando template literals
@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  nomePortal: string;
  cursos = {
    'curso_um': 'Java',
    'curso_dois': 'Angular'
  }
  alunos: string[];

  constructor(private alunosService: AlunosService) {
    this.nomePortal = 'http://loaine.training'
    this.alunos = this.alunosService.getAlunos();
  }

  ngOnInit(): void {
  }

}
