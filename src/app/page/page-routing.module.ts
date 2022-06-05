import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PagePage } from './page.page';

const routes: Routes = [
  {
    path: '',
    component: PagePage,
    children: [
      {
        path: 'home',
        loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
      },
      {
        path: 'adotar',
        loadChildren: () => import('./home/adotar/adotar.module').then( m => m.AdotarPageModule )
      },
      {
        path: 'editar-pet',
        loadChildren: () => import('./medicamento/editar-pet/editar-pet.module').then( m => m.EditarPetPageModule )
      },
      {
        path: 'servicos',
        loadChildren: () => import('./exame/exame.module').then( m => m.ExamePageModule)
      },
      {
        path: 'criar-servicos',
        loadChildren: () => import('./exame/criar-exame/criar-exame.module').then( m => m.CriarExamePageModule)
      },
      {
        path: 'meus-servicos',
        loadChildren: () => import('./exame/meus-servico/meus-servicos.module').then( m => m.MeusServicosPageModule)
      },
      {
        path: 'editar-servicos',
        loadChildren: () => import('./exame/editar-servico/editar-servico.module').then( m => m.EditarServicoPageModule)
      },
      {
        path: 'meus-produtos',
        loadChildren: () => import('./exame/meus-produtos/meus-produtos.module').then( m => m.MeusProdutosPageModule)
      },
      {
        path: 'editar-produto',
        loadChildren: () => import('./exame/editar-produto/editar-produto.module').then( m => m.EditarProdutoPageModule)
      },
      {
        path: 'criar-produto',
        loadChildren: () => import('./exame/criar-produto/criar-produto.module').then( m => m.CriarProdutoPageModule)
      },
      {
        path: 'produtos',
        loadChildren: () => import('./exame/produtos/produtos.module').then( m => m.ProdutosPageModule)
      },
      {
        path: 'chat',
        loadChildren: () => import('./consulta/consulta.module').then( m => m.ConsultaPageModule)
      },
      {
        path: 'criar-consulta',
        loadChildren: () => import('./consulta/criar-consulta/criar-consulta.module').then( m => m.CriarConsultaPageModule)
      },
      {
        path: 'minha-area',
        loadChildren: () => import('./medicamento/medicamento.module').then( m => m.MedicamentoPageModule)
      },
      {
        path: 'criar-medicamento/:id',
        loadChildren: () => import('./medicamento/criar-medicamento/criar-medicamento.module').then( m => m.CriarMedicamentoPageModule)
      },
      {
        path: 'forum',
        loadChildren: () => import('./clinicas/clinicas.module').then( m => m.ClinicasPageModule)
      },
      {
        path: 'criar-post',
        loadChildren: () => import('./clinicas/criar-post/criar-post.module').then( m => m.CriarPostPageModule)
      },
      {
        path: 'comentario',
        loadChildren: () => import('./clinicas/comentarios/comentario.module').then( m => m.ComentarioPageModule)
      },
      {
        path: 'editar-post',
        loadChildren: () => import('./clinicas/editar-post/editar-post.module').then( m => m.EditarPostPageModule)
      },
      {
        path: '',
        redirectTo: '/page/home',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagePageRoutingModule {}
