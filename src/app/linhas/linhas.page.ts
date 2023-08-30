import { Component, OnInit } from '@angular/core';
import { BdtempService } from '../services/bdtemp.service';

@Component({
  selector: 'app-linhas',
  templateUrl: './linhas.page.html',
  styleUrls: ['./linhas.page.scss'],
})
export class LinhasPage implements OnInit {

  qtdeItensCarrinho = 0;

  listaProdutos = [
    {
      nome: "Linha Merce",
      descricao: "3.00mts - algodão",
      valor: 19.98,
      // por o endereço da foto com o caminho//
     foto:''
    },
    {
      nome: "Agulha de tapeceiro",
      descricao: "3.00mts - algodão",
      valor: 5,
      foto:''
    },
    {
      nome: "linha euroroma",
      descricao: "3.00mts - algodão",
      valor: 25,
      foto:''
    },
    {
      nome: "olhos pinos 10 pares",
      descricao: "3.00mts - algodão",
      valor: 25,
      foto:'https://img.elo7.com.br/product/zoom/3562857/5-pares-olhos-15-mm-castanhos-boneca-esperanca-olhos-castanhos.jpg'
    },
  ];

  constructor(public bdtemp: BdtempService) { }

  ngOnInit() {
  }
  addProdutoCarrinho(produto: any){
    this.bdtemp.addProdutoCarrinho(produto);

    this.buscarDadosCarrinho();
  }

  buscarDadosCarrinho(){
    this.qtdeItensCarrinho = this.bdtemp.buscar('qtdeItensCarrinho');
  }
}
