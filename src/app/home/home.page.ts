import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';
import { EventsService } from '../services/events.service';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  event_list: any;
  category_list:any;


// metodo predeterminado de las clases, en el se crean unos parametros
  constructor( private router: Router,
             private storage: Storage,
             private events:EventsService
             ) {} // llamada para utilazarlo


             ionViewDidEnter(){
               this.events.getEvents().then(
                 res => {
                   this.event_list = res;
                   console.log("Eventos desde el servidor", this.event_list)
                 })
               console.log("Local Events", this.events.getLocalEvents().events);

               console.log('Local Events', this.events.getLocalEvents().events);

               // todas las catecorias
               this.events.getCategorias().then(
                 (res) => {
                   this.category_list = res;
                   console.log('Categorías desde el servidor', this.category_list);
                 }              
               );
   // categoría por ID
    const categoryId = 1; 
    this.events.getCategoryId(categoryId).then(
      (category) => {
        console.log('Categoría específica por ID', category);
      }
    );

       
              }

                    

  goToIntro()
  {
   console.log("go to intro"); 
   this.router.navigateByUrl('/intro');
   this.storage.set('mostraIntro',true);

   }

   
}

