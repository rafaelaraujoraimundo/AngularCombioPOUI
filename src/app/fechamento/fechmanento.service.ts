import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PoTableColumn } from '@po-ui/ng-components';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FechamentoService {
  
  constructor(private http: HttpClient) {}


  getAllItems():  Observable<any> {
    let params = new HttpParams();

    const options = {
      params: params
    };

    return this.http.get('/dts/datasul-rest/resources/prg/esp/fnd/v1/api_cidade', options );
  }

  getColumns(): Array<PoTableColumn> {
    return [
      { property: 'ano', label: 'Ano'},
      { property: 'mes', label: 'Mês' },
      { property: 'dt-fechamento', label: 'Data Fechamento' },
      { property: 'usuar-criacao', label: 'Usuario Criação' },
      { property: 'dt-criacao', label: 'Data Criação' },
      { property: 'usuar-alteracao', label: 'Usuario Alteração' },
      { property: 'dt-alteracao', label: 'Data Alteração' },
    ];
  }
}
