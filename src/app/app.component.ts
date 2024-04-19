import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import {
  PoMenuItem,
  PoMenuModule,
  PoToolbarModule,
} from '@po-ui/ng-components';
import { HomeComponent } from './features/home/home.component';
import { SharedModule } from './shared/shared.module';
import { ToolbarModule } from './core/toolbar/toolbar.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    PoToolbarModule,
    PoMenuModule,
    SharedModule,
    ToolbarModule,
    HttpClientModule,
    HomeComponent,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  readonly menus: Array<PoMenuItem> = [
    { label: 'Home', action: this.onClick.bind(this) },
    { label: 'Cadastro',  },
    { label: 'Consulta',  },
    { label: 'Sair', },
  ];

  private onClick() {
    alert('Clicked in menu item');
  }
}
