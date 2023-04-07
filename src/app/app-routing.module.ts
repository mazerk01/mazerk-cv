import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './features/pages/home/home.component';
import { LoginComponent } from './features/pages/login/login.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    title: 'mazERK - Login'
  },
  {
    path: 'home',
    component: HomeComponent,
    title: 'mazERK - Home'
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
