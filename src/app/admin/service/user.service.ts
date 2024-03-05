import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  constructor(private http: HttpClient) {}


  getAllUsers(page: number, pageSize: number) {
    let params = new HttpParams();
    if (page) {
      params = params.set('page', page.toString());
    }
    if (pageSize) {
      params = params.set('pageSize', pageSize.toString());
    }
    const options = {
      params: params
    };

    return this.http.get('/dts/datasul-rest/resources/prg/btb/v1/usuarios', options );
  }
}
