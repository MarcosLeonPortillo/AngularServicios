import { Component } from '@angular/core';
import { AlertService } from '../servicio/alert.service';
import { Proyecto } from '../clases/proyecto.model';
import { ProyectoServicioService } from '../servicio/proyecto-servicio.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrl: './proyectos.component.css'
})
export class ProyectosComponent {
  public inputNombre:string='';
  public inputPresupuesto:string='';
  public proyecto: Proyecto = new Proyecto();
  public listaProyecto:Proyecto[] = new Array<Proyecto>();

  constructor(private ruta: Router, private alerta:AlertService, private proyectoService: ProyectoServicioService){ //Insertar el servicio en el constructor de la clase
    console.log("Entro en constructor de Proyectos")
  }
  enviarMensaje (mensaje: string){
    this.alerta.mostrarMensaje(mensaje);
  } 
 ngOnInit (){
  //this.enviarMensaje("ngOnInit de HomeComponent");
 }
 agregar(){
  this.proyecto.nombre = this.inputNombre;
  this.proyecto.presupuesto = this.inputPresupuesto;
  this.proyectoService.crearProyecto(this.proyecto);
  console.log(this.proyecto.nombre);
  console.log(this.proyecto.presupuesto);

  // Navegar a otro componente por código
  this.ruta.navigate(['']);
 }
}
