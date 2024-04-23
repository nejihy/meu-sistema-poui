import { Component, OnInit } from '@angular/core';
import { PoBreadcrumb, PoPageAction, PoTableColumn } from '@po-ui/ng-components';
import { Cadastros } from './shared/interfaces/cadastros.interface';

@Component({
  selector: 'app-cadastros',
  standalone: false,
  templateUrl: './cadastros.component.html',
  styleUrl: './cadastros.component.css'
})

export class CadastrosComponent implements OnInit {
  actions: Array<PoPageAction> = [
    {label: 'Novo'}
  ];

  breadcrumb: PoBreadcrumb = {
    items: [
      { label: 'Home', link: '/' },
      { label: 'Cadastros' }
    ]
  }

  columns!: Array<PoTableColumn>;
  cadastros: Cadastros = {
    items: [],
    hasNext: false,
    remainingRecords: 0
  }

  constructor() { }

  ngOnInit(): void {
    this.setColumns();
    this.getCadastros();
  }

  setColumns(): void {
    this.columns = [
      { property: 'id', label: 'Código' },
      { property: 'name', label: 'Nome' },
      { property: 'cgc', label: 'CPF', visible: false },
      { property: 'email', label: 'E-mail' }
    ]
  }

  getCadastros(): void {
    this.cadastros.items = [
      { id: '00001', name: 'João', cgc: '1234567890', email: 'joao@teste.com.br' }
    ]
  }
}
