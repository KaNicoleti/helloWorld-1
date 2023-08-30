import { Component, OnInit } from '@angular/core';
import { BdtempService } from '../services/bdtemp.service';

@Component({
  selector: 'app-agulhas',
  templateUrl: './agulhas.page.html',
  styleUrls: ['./agulhas.page.scss'],
})
export class AgulhasPage implements OnInit {

  qtdeItensCarrinho = 0;

  listaProdutos = [
    {
      nome: "Agulha tulip-red",
      descricao: "2.00cm - emborrachada",
      valor: 100,
      // por o endereço da foto com o caminho//
     foto:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQ7JTfRRrsOQgnTgt8J3L3TdjKdMw_dTRX0Q&usqp=CAU'
    },
    {
      nome: "Agulha de croche",
      descricao: "4cm - ferro",
      valor: 50,
      foto:''
    },
    {
      nome: "Agulha circulo",
      descricao: "6cm - cabo emborrachado",
      valor: 427,
      foto:''
    },
    {
      nome: "Agulha de tapeceiro",
      descricao: "10cm",
      valor: 340,
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
