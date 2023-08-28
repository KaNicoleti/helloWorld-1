import { Component, OnInit } from '@angular/core';
import { BdtempService } from '../services/bdtemp.service';

@Component({
  selector: 'app-bonecos',
  templateUrl: './bonecos.page.html',
  styleUrls: ['./bonecos.page.scss'],
})
export class BonecosPage implements OnInit {
  qtdeItensCarrinho = 0;

  listaProdutos = [
    {nome: "Bonecos E Personagens Em Crochet - Amigurumi",
    descricao: "Cor: CINZA",
    valor: 140,
    foto: 'https://http2.mlstatic.com/bonecos-e-personagens-em-crochet-amigurumi-D_NQ_NP_902485-MLB28008858014_082018-F.jpg'
    },

    {nome: "bonecos a hora da aventura",
    descricao: "Referente a imagem",
    valor: 450,
    foto: 'https://th.bing.com/th/id/OIP.vzk9nzftP3s0dZ9JSFb7GgHaGN?pid=ImgDet&rs=1'
    },

    {nome: "Boneca de Crochê",
    descricao: "Cor: De Pele e vestido azul",
    valor: 200,
    foto: 'https://th.bing.com/th/id/R.0e8b506977e2c8602ae91b74a049c0bb?rik=bpy2Fxkshtv%2fjw&riu=http%3a%2f%2fimg.elo7.com.br%2fproduct%2foriginal%2fD1C140%2fboneca-de-croche-crochet-doll.jpg&ehk=SRBowiSt1NvmoCZmiuFOBRBp8YFJZFL3J4aHLImf844%3d&risl=&pid=ImgRaw&r=0'
    },

    {nome: "Raposa",
    descricao: "Cor:Laranja",
    valor: 360,
    foto: 'https://http2.mlstatic.com/D_NQ_NP_626381-MLB47416618916_092021-O.webp'
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