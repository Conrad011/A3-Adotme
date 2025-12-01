import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { Home } from './pages/home/home';
import { AdminPanel } from './pages/admin-panel/admin-panel';
import { AuthGuard } from './auth-guard';

export const routes: Routes = [
  { path: '', redirectTo: 'public-home', pathMatch: 'full' },

  { path: 'login', component: LoginComponent },

  // páginas sem login
  { path: 'public-home', component: Home },

  // páginas com login obrigatório
  { path: 'admin-panel', component: AdminPanel, canActivate: [AuthGuard] },

  { path: '**', redirectTo: 'public-home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
