import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastrosComponent } from './cadastros.component';
import { SharedModule } from '../../shared/shared.module';
import { CadastrosRoutesModule } from './cadastros-routes.module';



@NgModule({
  declarations: [CadastrosComponent],
  imports: [
    CommonModule,
    SharedModule,
    CadastrosRoutesModule
  ]
})
export class CadastrosModule { }
