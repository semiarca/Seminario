import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { AuthenticService } from '../services/authentic.service';
import { Storage } from '@ionic/storage-angular';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
 loginForm: FormGroup;
  validation_messages = {
    email: [
      { type: "required", message: "Campo requerido" },
      { type: "pattern", message:  "El correo no es valido o ya esta en uso" }
    ],  
    // validaciones de mensajes de Password
    password: [
      {type: "required",  message: "Campo requerido"},
      {type: "pattern",   message: "Ingrese una contraseña valida"},
      {type: "minLength", message: "Debe tener minimo 4 caracteres"},
      
    ]
  }
 loginMessage: any;
 
constructor(
  private formBuilder: FormBuilder,
  private navCtrl: NavController,
  private authenticServe:AuthenticService,
  private storage: Storage
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
    //validaciones para el password
    password: new FormControl(
      "",
        Validators.compose([
        Validators.required,
        Validators.minLength(4), // Mínimo de caracteres
        Validators.maxLength(10), // Máximo de caracteres
        Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]*$/)
      ])
    )
  })
 }
// abrir y cerr  eye
 ngOnInit() {
  
 }
 eye(){

  const passwordInput = document.getElementById('password-input') as HTMLInputElement;
  const passwordType = passwordInput.type === 'password' ? 'text' : 'password';
  passwordInput.type = passwordType;
 }

login(login_data: any)
{
  console.log(login_data);
  this.authenticServe.loginUser(login_data).then(res=>{
  this.loginMessage= res;
  this.storage.set('userLoggeIn', true);// agrego validacion del login
  this.navCtrl.navigateForward('/home');
  
  }).catch(Error=>{
    this.loginMessage= Error;
  });
  
}

}