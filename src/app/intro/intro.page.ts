import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
})
export class IntroPage {

  constructor( private router: Router,
    ) { }

  ngOnInit() {
  }
  ionViewDidEnter(){
    console.log('Entre a la Intro');
  }

  goHome(){
  console.log("go home"); 
  this.router.navigateByUrl('/home');
  
   }
   
}

//2.Crear un boton en intro para omitir y regresar al home (tarea)