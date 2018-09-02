import { Injectable } from '@angular/core';
import { Coletanea } from '../models/coletanea';
import { Observable, Subject } from '../../node_modules/rxjs';
import  '../../node_modules/rxjs/operators';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ServiceColetanea {
   coletanea : Subject<Coletanea> = new Subject<Coletanea>();

  constructor() {
    let coletanea = new Coletanea();
    this.coletanea.next(coletanea);

   }
  public atualizarColetanea(coletanea: Coletanea):void{
    this.coletanea.next(coletanea);
  }
  public buscarColetanea():Observable<Coletanea>{
    return this.coletanea;
  }

}
