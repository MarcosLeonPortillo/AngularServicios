import { Component, OnInit } from '@angular/core';
import { AlertService } from '../servicio/alert.service';
import { ProyectoServicioService } from '../servicio/proyecto-servicio.service';
import { Proyecto } from '../clases/proyecto.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  public proyecto: Proyecto;

  public arrayProyecto:Proyecto[]=[];

  constructor(private alerta:AlertService, private proyectoService: ProyectoServicioService){ //Insertar el servicio en el constructor de la clase
    this.proyecto = this.proyectoService.obtenerProyecto();
    this.arrayProyecto = this.proyectoService.obtenerListaProyectos();
  
    console.log("Entro en constructor de Home");

  }
  enviarMensaje (mensaje: string){
    this.alerta.mostrarMensaje(mensaje);
  } 
 ngOnInit (){
  //this.enviarMensaje("ngOnInit de HomeComponent");

 }

}
