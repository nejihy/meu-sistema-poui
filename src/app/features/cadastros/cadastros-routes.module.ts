import { RouterModule, Routes } from '@angular/router';
import { CadastrosComponent } from './cadastros.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
  { path: '', component: CadastrosComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class CadastrosRoutesModule { }
