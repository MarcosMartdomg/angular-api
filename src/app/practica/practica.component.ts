import { Component } from '@angular/core';
import { ServiciopracticaService } from '../serviciopractica.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-practica',
  imports: [NgFor], //No se importa HttpClient porque se encuentra en el app.config.ts
  templateUrl: './practica.component.html',
  styleUrl: './practica.component.css'
})
export class PracticaComponent {

  public datos:any[]=[];//guardar los datos que se obtienen del servicio
  constructor(private servicio:ServiciopracticaService){}
  ngOnInit(): void{
    this.servicio.getDatos().subscribe(
      (datos)=>{
        this.datos=datos;//Se pinta y renderiza en el template html
      }
    )
  }//Cierra ngOnInit
}// Aqui se cierra la clase
