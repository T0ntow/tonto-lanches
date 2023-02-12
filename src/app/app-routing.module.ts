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
    path: 'lanchonetes',
    loadChildren: () => import('src/app/components/lanchonetes/lanchonetes.module').then(m => m.LanchonetesComponentModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }