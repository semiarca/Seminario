import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
})
export class IntroPage {
   //-----------------------
 slides = [
  //primer slide
  {
    
  },
  //segundo kimetsu
  {
    image: "../../assets/img/2.png",
    description: "  Secuela del anime Kimetsu no Yaiba Animación. Aventuras. Fantástico. Acción. Thriller.Drama | Monstruos. Trenes |Metros.Animación para adultos. Manga. ",
    title: " Demon Slayer",
    subtitle: "2 DE MARZO SOLO EN CINES", 
    class: "slide-1",
  },
  //tercero  niño garza
  {
    image: "../../assets/img/niño2.jpeg",
    description: "Un joven llamado Mahito tras perder a su madre se aventura en un mundo donde habitan vivos y muertos,un lugar fantástico donde la vida encuentra un nuevo comienzo.",
    title: " El niño y la Garza",
    subtitle: "Estreno: 25-Ene-2024",
  },
  // cuarto naruto
  {
    image: "../../assets/img/imagen1.png",
    description: "Para evitar que un ninja reviva a un demonio poderoso que podría destruir el mundo, Naruto se une a una joven sacerdotisa, aun cuando ella predice su muerte.",
    title: "Proximamente",
    subtitle: "BoletApp te la tiene",
    
  }
]
//----------------------------------
  
  constructor( private router: Router,
    private storage:  Storage
    ) { }

  ngOnInit() {
  }
  ionViewDidEnter(){
    console.log('Entre a la Intro');
  }

  goHome(){
  console.log("go home"); 
  this.storage.set('mostraIntro',true);
  this.router.navigateByUrl('/home');
  
   }
   
}

//2.Crear un boton en intro para omitir y regresar al home (tarea)
// 3. setear en el home que ya se vio la intro: guardar en el storage que ya se vio la intro
