import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './Page/home/home.component';
import { LoginComponent } from './Page/login/login.component';
import { ErrorComponent } from './Page/common/error/error.component';
import { Buy00001Component } from './Page/task/buy/buy00001/buy00001.component';



const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: '**', component: ErrorComponent },
  { path: 'buy00001', component: Buy00001Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
