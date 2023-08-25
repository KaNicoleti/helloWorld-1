import { Component, OnInit } from '@angular/core';
import { BdtempService } from '../services/bdtemp.service';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.page.html',
  styleUrls: ['./carrinho.page.scss'],
})
export class CarrinhoPage implements OnInit {

// variavel para guardar dados
listaItens = [];

  constructor(public bdtemp: BdtempService) { }

  ngOnInit() {
  }

  // função que busca
  buscarItensCarrinho(){
    this.listaItens = this.bdtemp.buscar('carrinho');
    }

    // é chamado toda vex que a tela vai aparecer
    ionViewWillEnter(){
      this.buscarItensCarrinho();
    }
}

