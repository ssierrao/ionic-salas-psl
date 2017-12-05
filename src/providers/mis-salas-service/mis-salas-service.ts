import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Sala, Salas} from '../../models/Salas';

/*
  Generated class for the MisSalasServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MisSalasServiceProvider {
  private baseURL: string = 'https://salas-psl.firebaseio.com';

  constructor(private http: Http) {
  }

  getSalas(): Promise<Salas> {
    return new Promise(resolve => {
      this.http.get(`${this.baseURL}/salas.json`).subscribe(res => resolve(res.json()));
    });
  }

  getSalaDetalle(nombre: string): Promise<Sala> {
    return new Promise(resolve => {
      this.http.get(`${this.baseURL}/salas/${nombre}.json`).subscribe(res => resolve(res.json()));
    });
  }

  deleteSala(nombre: string): Promise<Salas> {
    return new Promise(resolve => {
      this.http.delete(`${this.baseURL}/salas/${nombre}.json`).subscribe(res => resolve(res.json()));
    });
  }

  updateSala(nombre: string, sala: Sala): Promise<Salas> {
    return new Promise(resolve => {
      this.http.patch(`${this.baseURL}/salas/${nombre}.json`, JSON.stringify(sala))
        .subscribe(res => resolve(res.json()));
    });
  }

}
