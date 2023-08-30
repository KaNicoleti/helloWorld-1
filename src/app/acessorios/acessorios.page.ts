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
      nome: "Brico Macramê",
      descricao: "2.00cm - emborrachada",
      valor: 100,
      // por o endereço da foto com o caminho//
     foto:'https://i.pinimg.com/736x/0f/15/e7/0f15e764a49ba79ba3ea86b0fc5773d5.jpg'
    },
    {
      nome: "Tapete de banheiro (jogo)",
      descricao: "3 peças",
      valor: 5,
<<<<<<< HEAD
      foto:'https://static3.tcdn.com.br/img/img_prod/864148/marcador_de_ponto_tipo_cadeado_para_croche_e_trico_pct_c_50_unid_1461_1_9b6de0d9d29cd71c0d3a67fd54ca80ff.jpg'
=======
      foto:'https://i.pinimg.com/564x/d1/b1/f4/d1b1f4d8b691589352bdb166a5ef3422.jpg'
>>>>>>> cac9800543b43e976069d2bf08f4d10a83142acd
    },
    {
      nome: "Capa de banco",
      descricao: "Flor",
      valor: 25,
      foto:'https://i.pinimg.com/736x/c8/a5/7f/c8a57ff4c2fe8e35a24a414d73a78c52.jpg'
    },
    {
      nome: "Tapete de banheiro azul",
      descricao: "3 peças",
      valor: 25,
      foto:'https://i.pinimg.com/564x/00/a9/fb/00a9fb0c039ec4e2541b3879f71397a2.jpg'
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

