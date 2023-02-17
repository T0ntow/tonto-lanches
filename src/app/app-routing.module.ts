import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomeComponentModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginComponentModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./pages/signup/signup.module').then(m => m.SignupComponentModule)
  },
  {
    path: 'createLanchonete',
    loadChildren: () => import('./pages/create-lanchonete/lanchonete.module').then(m => m.CreateLanchonetComponenteModule)
  },
  {
    path: 'minha-loja',
    loadChildren: () => import('./pages/minha-loja/minha-loja.module').then( m => m.MinhaLojaPageModule)
  },
  
  //aparentemente não podemos ter dois imports de modulos (Kkkk muitas hrs gastas)
  // {
  //   path: 'lojas',
  //   loadChildren: () => import('./components/lojas/lojas.module').then(m => m.LojasComponentModule)
  // },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }