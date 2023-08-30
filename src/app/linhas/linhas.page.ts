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
      nome: "Linha Amazônia",
      descricao: "3.00mts - algodão",
      valor: 19.98,
      // por o endereço da foto com o caminho//
     foto:'https://www.armarinhosaojose.com.br/octopus/design/images/94/products/b/barbante-amazonia-4-600g-921m.jpg'
    },
    {
      nome: "Linha Floe",
      descricao: "3.00mts - algodão",
      valor: 5,
      foto:'https://i.pinimg.com/564x/f4/c6/e9/f4c6e95d3d45ed0e9a0be256a160f9c1.jpg'
    },
    {
      nome: "linha Pasione",
      descricao: "3.00mts - algodão",
      valor: 25,
      foto:'https://www.armarinhosaojose.com.br/octopus/design/images/94/products/b/linha-passione.jpg'
    },
    {
      nome: "Linha Euroroma",
      descricao: "3.00mts - algodão",
      valor: 25,
      foto:'https://images.tcdn.com.br/img/img_prod/605770/barbante_euroroma_colorido_n6_1kg_cor_900_azul_bebe_4320_1_ab70b240c7f4666a88410d9f4614c91d.jpg'
    },
    {
      nome: "Linha Euroroma",
      descricao: "3.00mts - algodão",
      valor: 25,
      foto:'https://i.pinimg.com/originals/11/4c/31/114c3179e5eb3a2b3d33202b1c0ad045.jpg'
    },
    {
      nome: "Linha Euroroma",
      descricao: "3.00mts - algodão",
      valor: 25,
      foto:'https://www.armarinhosaojose.com.br/octopus/design/images/94/products/b/barbante-roma-6-1kg.jpg'
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
}import { Component, OnInit } from '@angular/core';
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
      nome: "Linha Amazônia",
      descricao: "3.00mts - algodão",
      valor: 19.98,
      // por o endereço da foto com o caminho//
     foto:'https://www.armarinhosaojose.com.br/octopus/design/images/94/products/b/barbante-amazonia-4-600g-921m.jpg'
    },
    {
      nome: "Linha Floe",
      descricao: "3.00mts - algodão",
      valor: 5,
      foto:'https://i.pinimg.com/564x/f4/c6/e9/f4c6e95d3d45ed0e9a0be256a160f9c1.jpg'
    },
    {
      nome: "linha Pasione",
      descricao: "3.00mts - algodão",
      valor: 25,
      foto:'https://www.armarinhosaojose.com.br/octopus/design/images/94/products/b/linha-passione.jpg'
    },
    {
      nome: "Linha Euroroma",
      descricao: "3.00mts - algodão",
      valor: 25,
      foto:'https://images.tcdn.com.br/img/img_prod/605770/barbante_euroroma_colorido_n6_1kg_cor_900_azul_bebe_4320_1_ab70b240c7f4666a88410d9f4614c91d.jpg'
    },
    {
      nome: "Linha Euroroma",
      descricao: "3.00mts - algodão",
      valor: 25,
      foto:'https://i.pinimg.com/originals/11/4c/31/114c3179e5eb3a2b3d33202b1c0ad045.jpg'
    },
    {
      nome: "Linha Euroroma",
      descricao: "3.00mts - algodão",
      valor: 25,
      foto:'https://www.armarinhosaojose.com.br/octopus/design/images/94/products/b/barbante-roma-6-1kg.jpg'
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