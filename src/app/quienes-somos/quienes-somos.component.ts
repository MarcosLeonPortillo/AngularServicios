import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Placeholder } from '../interfaces/placeholder';

@Component({
  selector: 'app-quienes-somos',
  templateUrl: './quienes-somos.component.html',
  styleUrl: './quienes-somos.component.css'
})
export class QuienesSomosComponent implements OnInit{
  public resultadoPeticion: any;
  public inputIdGet: string='';
  public url:string ="https://jsonplaceholder.typicode.com/posts";
   
  constructor (private http:HttpClient){

  }
  ngOnInit(){
    this.get();
  }

  get(){
    this.http.get<Placeholder>(this.url)
    .subscribe( data => {this.resultadoPeticion = data;});
  }

  get2(){
    this.http.get(this.url+"/"+this.inputIdGet)
    .subscribe ( data => {this.resultadoPeticion = data;
      console.log(this.resultadoPeticion.id);
      console.log(this.resultadoPeticion.userId);
      console.log(this.resultadoPeticion.body);
      console.log(this.resultadoPeticion.title);
    });
  }
  get3(){
    this.http.get<Placeholder>(this.url+"/"+this.inputIdGet)
    .subscribe({
      next: (respuesta: Placeholder) => {
        this.resultadoPeticion = respuesta;
        console.log(this.resultadoPeticion.id);
        console.log(this.resultadoPeticion.userId);
        console.log(this.resultadoPeticion.body);
        console.log(this.resultadoPeticion.title);
      },
      error: (err) => {console.log("error");}
    }
    );
  }
  post (){
    this.http.post(this.url,
      {
        userId: 2,
        id: 200,
        title:  "nuevo titulo",
        body: "nuevo cuerpo"
      }).subscribe(data => {this.resultadoPeticion = data;})
  }

  put (){
    this.http.put(this.url+"/10",
      {
        userId: 2,
        title:  "nuevo titulo",
        body: "nuevo cuerpo"
      }).subscribe(data => {this.resultadoPeticion = data;})
  }

  patch(){
    this.http.patch(this.url+"/10",
      {
        userId: 2,
        title:  "nuevo titulo",
        body: "nuevo cuerpo"
      }).subscribe(data => {this.resultadoPeticion = data;})
  }

  delete(){
    this.http.delete(this.url+"/10",
      {
      }).subscribe(data => {this.resultadoPeticion = data;})
  }
}
