import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
// colocar aca el vector

// metodo predeterminado de las clases, en el se crean unos parametros
  constructor( private router: Router,
             private storage: Storage) {} // llamada para utilazarlo

  goToIntro(){
  console.log("go to intro"); 
  this.router.navigateByUrl('/intro');
  this.storage.set('mostraIntro',true);

   }
}

