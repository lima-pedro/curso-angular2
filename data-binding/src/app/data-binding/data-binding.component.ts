import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  url: string = 'https://google.com.br';
  curtirCurso: boolean = true;
  img: string = '../assets/img/angular-3.svg';

  getValor() {
    return 1;
  }

  getCurtirCurso () {
    return true;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
