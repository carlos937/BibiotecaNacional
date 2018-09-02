import { Component, OnInit } from '@angular/core';
import { FormControl,FormArray, FormGroup , FormBuilder , Validators } from '@angular/forms';
import { ServiceColetanea } from '../../../services/service-coletanea.service';
import {Coletanea} from '../../../models/coletanea';
import { Musica } from '../../../models/musica';
@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
 
  coletaneaForm:FormGroup
  listaMusicas:FormArray

  constructor(private fb : FormBuilder,private coletaneaServ : ServiceColetanea) {
    
    this.coletaneaForm = fb.group({
       tituloDaObra:  [''],
       nomeAutor : [''],
       listaMusicas : fb.array([
          this.createItem()
       ])
    })
    
  }
  
  createItem(): FormGroup {
    return this.fb.group({
      tituloMusica: [''],
      letra: [''],
    });
  }
  addItem(): void {
    this.listaMusicas = this.coletaneaForm.get('listaMusicas') as FormArray;
    this.listaMusicas.push(this.createItem());
    this.enviarColetanea();
  }
  enviarColetanea(){
    let formColetanea:any =  this.coletaneaForm.value;
    let coletanea = new  Coletanea();
    coletanea.nomeUsuario = formColetanea.nomeAutor;
    coletanea.tituloDaObra = formColetanea.tituloDaObra;
    
    let musicas = new Array<Musica>()
    formColetanea.listaMusicas.map((lM) => {
      let musica = new Musica
      musica.tituloMusica = lM.tituloMusica;
      musica.letra = lM.letra;
      musicas.push(musica);
    });
    coletanea.listaMusicas = musicas
  
    this.coletaneaServ.atualizarColetanea(coletanea)
    
    
  }
  ngOnInit() {
  }






}
