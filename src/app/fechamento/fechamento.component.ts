import { Component, OnInit } from '@angular/core';
import { FechamentoService } from './fechmanento.service';
import { Router } from '@angular/router';
import { PoNotificationService } from '@po-ui/ng-components';

@Component({
  selector: 'app-fechamento',
  templateUrl: './fechamento.component.html',
  styleUrls: ['./fechamento.component.css']
})
export class FechamentoComponent implements OnInit {

  fechamentoList: Array<any> = new Array();
  colunasTable: Array<any> = new Array();
 
  constructor(private fechamentoService: FechamentoService,
    private router: Router,
    private poNotification: PoNotificationService) { }
 
  ngOnInit(): void {
    this.updateCidadesList(); //busca a lista em nosso Api
    this.colunasTable = this.fechamentoService.getColumns(); //atualiza o titulo das colunas
  }
  //Metódo responsável por se isncrever no serviço e atualizar a lista de fornecedores
  updateCidadesList(): void {
    this.fechamentoService.getAllItems().subscribe(response => {
      this.fechamentoList = response.items;
    });
  }

}