import { Injectable } from '@angular/core';
import * as dataEvents from "./events.json";

@Injectable({
  providedIn: 'root'
})


@Injectable({
  providedIn: 'root'
})
export class EventsService {
  urlServer ="http://190.131.209.106";

  constructor() {}

  getEvents(){
    return fetch(`${this.urlServer}/events`).then(
      response=>response.json()
    );// string interpolacion, se apunta a la direccion del servidor 
  }

  getLocalEvents(){
    return dataEvents;// retorna los eventos que vienen del json importado
  }
//Obtener categorias " get hacia /categories "
  //Obtener 1 categoria " get hacia /categories/:id"

  getCategorias() {
    return fetch(`${this.urlServer}/categories`).then(
      response => response.json());
  }

  getCategoryId(id: number) {
    return fetch(`${this.urlServer}/categories/${id}`).then(
      response => response.json());
      
  }

}




  