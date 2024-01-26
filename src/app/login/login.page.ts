import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
 //import { AuthService } from '../services/auth.service';
//import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
 loginForm: FormGroup;
 
  
  //Crear validaciones para el password


constructor(private formBuilder: FormBuilder
    //private authService: AuthService,
  //private navCtrl: NavController
  ) {
  this.loginForm = this.formBuilder.group({
    email: new FormControl(
      "",// validaciones para el Email se puede colocar varios tipos como tamaño del correo etc
      Validators.compose([
        Validators.required,
        Validators.pattern(
          "^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$"// patron del email caracteres
        )
      ])
    ),
    //Crear validaciones para el password
    password: new FormControl(
      "",
      Validators.compose([
        Validators.required,
        Validators.minLength(8), // Mínimo 8 caracteres
        Validators.maxLength(20), // Máximo 20 caracteres
        Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/)

      ])
    )
  })
 }

ngOnInit() {
}



}