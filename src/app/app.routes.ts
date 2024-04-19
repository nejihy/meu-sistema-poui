import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'cadastros', loadChildren: () => import('./features/cadastros/cadastros.module').then(m => m.CadastrosModule)}
];
