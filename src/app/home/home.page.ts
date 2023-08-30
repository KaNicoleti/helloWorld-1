import { Component, OnInit } from '@angular/core';
import { BdtempService } from '../services/bdtemp.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
qtdeItensCarrinho = 0;

    listaProdutos = [
      {
        nome: "Agulha de tapeceiro",
        descricao: "10cm",
        valor: 2,
        foto:'https://th.bing.com/th/id/OIP.cuJg1-7BEeBUNX1rABQMEgHaHa?pid=ImgDet&rs=1'
      },
      {nome: "bonecos a hora da aventura",
      descricao: "Referente a imagem",
      valor: 225,
      foto: 'https://th.bing.com/th/id/OIP.vzk9nzftP3s0dZ9JSFb7GgHaGN?pid=ImgDet&rs=1'
      },
      {nome: "Raposa",
      descricao: "Cor:Laranja",
      valor: 180,
      foto: 'https://http2.mlstatic.com/D_NQ_NP_626381-MLB47416618916_092021-O.webp'
      },
      {
        nome: "olhos pinos 10 pares",
        descricao: "3.00mts - algodão",
        valor: 15,
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
