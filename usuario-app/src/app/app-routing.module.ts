import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsuarioComponent } from './usuario/usuario.component';
import { UsuarioDetalheComponent } from './usuario-detalhe/usuario-detalhe.component';
import { UsuarioNovoComponent } from './usuario-novo/usuario-novo.component';
import { UsuarioEditarComponent } from './usuario-editar/usuario-editar.component';

const routes: Routes = [
  {
    path: 'usuario',
    component: UsuarioComponent,
    data: { title: 'Lista de Usuário' }
  },
  {
    path: 'usuario-detalhe/:id',
    component: UsuarioDetalheComponent,
    data: { title: 'Detalhe do Usuário' }
  },
  {
    path: 'usuario-novo',
    component: UsuarioNovoComponent,
    data: { title: 'Adicionar Usuário' }
  },
  {
    path: 'usuario-editar/:id',
    component: UsuarioEditarComponent,
    data: { title: 'Editar o Usuário' }
  },
  { path: '',
    redirectTo: '/usuarios',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
