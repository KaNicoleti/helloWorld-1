import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'ofertas',
    loadChildren: () => import('./promocao/promocao.module').then( m => m.PromocaoPageModule)
  },
  {
    path: 'agulhas',
    loadChildren: () => import('./agulhas/agulhas.module').then( m => m.AgulhasPageModule)
  },

  {
    path: 'bonecos',
    loadChildren: () => import('./bonecos/bonecos.module').then( m => m.BonecosPageModule)
  },
  {
    path: 'carrinho',
    loadChildren: () => import('./carrinho/carrinho.module').then( m => m.CarrinhoPageModule)
  },
  {
    path: 'linhas',
    loadChildren: () => import('./linhas/linhas.module').then( m => m.LinhasPageModule)
  },
  {
    path: 'acessorios',
    loadChildren: () => import('./acessorios/acessorios.module').then( m => m.AcessoriosPageModule)
  },



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
