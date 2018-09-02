import { Component, OnInit } from '@angular/core';
import { Coletanea } from '../../../models/coletanea';
import { ServiceColetanea } from '../../../services/service-coletanea.service';
import { Observable } from 'rxjs';
import  'rxjs/operators';

@Component({
  selector: 'app-gerador-coletanea',
  templateUrl: './gerador-coletanea.component.html',
  styleUrls: ['./gerador-coletanea.component.css']
})
export class GeradorColetaneaComponent implements OnInit {

  coletanea:Coletanea
  constructor(private coletaneaServ : ServiceColetanea) { }
  //  coletanea : Coletanea
  ngOnInit() {
    this.coletaneaServ.buscarColetanea().subscribe(t => {
     this.coletanea = t
    },error => console.log("erro ao buscar coletanea"),() => {
    
    })
  }
  buscarColetanea(){
    
  }
  //  AtulizarColetanea(coletanea:Coletanea){
  //  this.coletanea = coletanea
  //  }
}
