import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lojas',
  templateUrl: './lojas.component.html',
  styleUrls: ['./lojas.component.scss'],
})

export class LojasComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

  lojas = [
    { nome: 'Lojinha 1', frete: 'Grátis', avaliacao: 3.5},
    { nome: 'Lojinha 2', frete: 'Grátis' , avaliacao: 3.1},
    { nome: 'Lojinha 3' , frete: 'Grátis', avaliacao: 3.1},
    { nome: 'Lojinha 4' , frete: 'Grátis', avaliacao: 3.1},
    { nome: 'Lojinha 5' , frete: 'Grátis', avaliacao: 3.1},
    { nome: 'Lojinha 6' , frete: 'Grátis', avaliacao: 3.1},
    { nome: 'Lojinha 7' , frete: 'Grátis', avaliacao: 3.1},
    { nome: 'Lojinha 8' , frete: 'Grátis', avaliacao: 3.1},
    { nome: 'Lojinha 9' , frete: 'Grátis', avaliacao: 3.1},
    { nome: 'Lojinha 10' , frete: 'Grátis', avaliacao: 3.1}
  ];
}


