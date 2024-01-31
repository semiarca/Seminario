import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class AuthenticService {

  constructor() { }

  loginUser(Credential: any){
    return new Promise((accept,reject)=>{
    if(
      Credential.email=='seeller.arrietac@pca.edu.co'&& Credential.password=='Seeller1'
    ){
      accept('login correcto');
    }else{
      reject('Login incorrecto');
    }
    });
  }

  registerUser(Credential: any) {
    return new Promise((accept,reject)=>{
      if(
           
        Credential.password=='Seeller1'&& Credential.confirmation_password=='Seeller1'
      ){
        accept('Registro exitoso ');
      }else{
        reject('Registro fallido');
      }
      });
    }

  
}
