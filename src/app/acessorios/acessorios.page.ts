import { Component, OnInit } from '@angular/core';
import { BdtempService } from '../services/bdtemp.service';

@Component({
  selector: 'app-acessorios',
  templateUrl: './acessorios.page.html',
  styleUrls: ['./acessorios.page.scss'],
})
export class AcessoriosPage implements OnInit {

  qtdeItensCarrinho = 0;

  listaProdutos = [
    {
      nome: "alfinetes",
      descricao: "50 unidades",
      valor: 10,
      // por o endereço da foto com o caminho//
     foto:''
    },
    {
      nome: "Marcador de pontos",
      descricao: "10 unidades",
      valor: 5,
      foto:''
    },
    {
      nome: "olhos achatados 10 pares",
      descricao: "9cm - redondo",
      valor: 15,
      foto:''
    },
    {
      nome: "olhos pinos 10 pares",
      descricao: "9cm - redondo",
      valor: 15,
      foto:''
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
