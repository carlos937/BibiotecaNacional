import { Injectable } from '@angular/core';
import { Coletanea } from '../models/coletanea';
import { Observable, Subject } from 'rxjs';
import  'rxjs/operators';

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
