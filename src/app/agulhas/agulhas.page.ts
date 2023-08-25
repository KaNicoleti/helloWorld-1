import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-agulhas',
  templateUrl: './agulhas.page.html',
  styleUrls: ['./agulhas.page.scss'],
})
export class AgulhasPage implements OnInit {

  qtdeItenscarinho = 0;

  listaProdutos = [
    {
      nome: "Agulha tulip-red",
      descricao: "2.00cm - emborrachada",
      valor: 100,
      // por o endereço da foto com o caminho//
     foto:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQ7JTfRRrsOQgnTgt8J3L3TdjKdMw_dTRX0Q&usqp=CAU'
    },
    {
      nome: "Agulha de tapeceiro",
      descricao: "10cm",
      valor: 5,
      foto:''
    },
    {
      nome: "olhos achatados 10 pares",
      descricao: "9cm - redondo",
      valor: 25
      foto:''
    },

  ];

  constructor() { }

  ngOnInit() {
  }
  addprodutoCarrinho(produto: any){
    this.bdtemp.addProdutosCarrinho(produto);

    this.buscarDadosCarrinho();
  }

  buscarDadosCarrinho(){
    this.qtdeItenscarinho = this.bdtemp.buscar('qtdeItensCarrinho');
  }
}
