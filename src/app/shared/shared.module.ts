import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PoModule, PoPageModule } from '@po-ui/ng-components';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    PoModule,
    PoPageModule,
  ]
})
export class SharedModule { }
