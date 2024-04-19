import { ToolbarComponent } from './toolbar.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [ToolbarComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    ToolbarComponent,
  ]
})
export class ToolbarModule { }
