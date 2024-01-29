import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { AuthenticService } from '../services/authentic.service';
import { Storage } from '@ionic/storage-angular';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
registerForm: FormGroup;
//mensajes de validacion
validation_messages = {
  email: [
    { type: "required", message: "Campo requerido" },
    { type: "pattern", message:  "El correo no es valido o ya esta en uso" }
  ], 
  name: [
    { type: "required", message: "Campo requerido" },
    { type: "pattern", message:  "Ingresa un nombre correcto" }
  ],  
  last_name: [
    { type: "required", message: "Campo requerido" },
    { type: "pattern", message:  "Ingresa un apellido correcto" }
  ],  
  
  // validaciones de mensajes de Password
  password: [
    {type: "required",  message: "Campo requerido"},
    {type: "pattern",   message: "Ingrese una contraseña valida"},
    {type: "minLength", message: "Debe tener minimo 4 caracteres"},
    
  ],
  confirmation_password: [
    {type: "required",  message: "Campo requerido"},
    {type: "pattern",   message: "No coincide con la contraseña"},
    {type: "minLength", message: "Debe tener minimo 4 caracteres"},
    
  ]
}
registerMessage: any;
// crear validaciones de los mensages
// mensaje de respuesta de registro  
constructor(
  private formBuilder: FormBuilder,
  private navCtrl: NavController,
  private storage: Storage,
  private authenticServe:AuthenticService,
  private router:Router


  ) {
    this.registerForm = this.formBuilder.group({
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
    ),

    //confirmar el password
    confirmation_password: new FormControl(
      "",
      Validators.compose([
        Validators.required,
        Validators.minLength(4), // Mínimo de caracteres
        Validators.maxLength(10), // Máximo de caracteres
        Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]*$/)
      ])
    ),

    //validaciones para el name
    name: new FormControl(
      "",
      Validators.compose([
        Validators.required,
        Validators.maxLength(20), // Máximo de caracteres
        Validators.pattern(/^[a-zA-Z\s']*$/)
      ])
    ),

    //validaciones para el last_name
    last_name: new FormControl(
      "",
      Validators.compose([
        Validators.required,
        Validators.maxLength(50), // Máximo de caracteres
        Validators.pattern(/^[a-zA-Z\s'-]*$/)
      ])
    )

   })
  }
  ngOnInit() {
  }
 
  register(register_data: any){
    {
      console.log(register_data);
      this.authenticServe.loginUser(register_data).then(res=>{
      this.registerMessage= res;
      this.storage.set('userLoggeIn', true);// agrego validacion del login
      this.navCtrl.navigateForward('/home');
      
      }).catch(Error=>{
        this.registerMessage= Error;
      });
      
    }

  }

 
  

}

