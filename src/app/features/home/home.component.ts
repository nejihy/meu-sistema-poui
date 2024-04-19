import { Component, OnInit } from '@angular/core';
import { PoPageModule } from '@po-ui/ng-components';
import { SharedModule } from '../../shared/shared.module';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    SharedModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log('TESTE');
  }

}
