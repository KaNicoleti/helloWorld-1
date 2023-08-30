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
      foto:'https://static3.tcdn.com.br/img/img_prod/864148/marcador_de_ponto_tipo_cadeado_para_croche_e_trico_pct_c_50_unid_1461_1_9b6de0d9d29cd71c0d3a67fd54ca80ff.jpg'
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
