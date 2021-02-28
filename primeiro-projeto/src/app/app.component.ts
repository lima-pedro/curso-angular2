import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Primeiro Projeto com Angular';
  dados = {
    "curso": "Curso de Angular 2",
    "professor": "Loaine Groner",
    "aluno": "Pedro Lima",
    "carga": "24 horas"
  }
}
