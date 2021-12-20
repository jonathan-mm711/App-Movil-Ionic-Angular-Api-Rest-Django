import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';

import { UsuariosService } from '../services/usuarios.service';

import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})


export class LoginPage implements OnInit {
  
  
  loginForm = new FormGroup({
    correo : new FormControl('', Validators.required),
    contrasena : new FormControl('', Validators.required)
  })
  
  
  constructor(
    private servicio : UsuariosService, 
    private router: Router
  ) { }
  
  errorVerificacion: Boolean = false;
  mensajeError: any = "holi"

  respuestaApi = "";

  loginUsuario(formulario){
    formulario['tipo'] = 'login'
    this.servicio.postearUsuario(formulario).subscribe((datos) => {
      //toma la respuesta del POST (message) y la asigna para ser comparada en el if
      this.respuestaApi = datos['message'];

      if(this.respuestaApi === "login_verificado"){
        localStorage.setItem("correo",formulario['correo']);
        this.router.navigate(['/']);
      }
      else{
        console.log(this.respuestaApi);
        this.errorVerificacion = true;
        this.mensajeError = "El correo y la contraseña no corresponden"
      }
    });
  }

  ngOnInit() {
  }

}
