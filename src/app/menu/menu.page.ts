import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  constructor(
    private menu: MenuController,
    private navController: NavController
  ) { }

  ngOnInit() {
  }

  closeMenu(){
    console.log(' cerrar menu')
    this.menu.close();
  }
  logout(){
    this.navController.navigateRoot("/menu/login")
  }
  
  goToRegister(){
    this.navController.navigateForward("/menu/register")
  }
  goHome(){
    this.navController.navigateBack('/menu/home')
  }
  goIntro(){
    this.navController.navigateRoot('/menu/intro')
  }
  goLogin(){
    this.navController.navigateRoot('/menu/login')
  }
}

