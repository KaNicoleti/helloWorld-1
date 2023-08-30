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
      foto:'https://th.bing.com/th/id/OIP.cuJg1-7BEeBUNX1rABQMEgHaHa?pid=ImgDet&rs=1'
    },
    {
      nome: "olhos achatados 10 pares",
      descricao: "9cm - redondo",
      valor: 25,
      foto:'https://img.elo7.com.br/product/zoom/409D0E6/kit-olho-chato-9mm-12mm-e-16mm-15pares-para-amigurumi-olhos-com-trava-de-seguranca.jpg'
    },
    {
      nome: "olhos pinos 10 pares",
      descricao: "9cm - redondo",
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
