import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../services/usuarios.service';

//formularios del video (link en appmodules)
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-metodo-update',
  templateUrl: './metodo-update.page.html',
  styleUrls: ['./metodo-update.page.scss'],
})
export class MetodoUPDATEPage implements OnInit {

   
  
  constructor(private servicio: UsuariosService) { }
  
  loginForm = new FormGroup({
    idUsuario : new FormControl('', Validators.required),
    correo : new FormControl('', Validators.required),
    contrasena : new FormControl('', Validators.required)
  })

  errorVerificacion: Boolean = false;
  mensajeError: any = "holi";
  
  cadenaACTUALIZAR= {  };
  actualizaUsuario(formulario){
    this.cadenaACTUALIZAR['correo'] = formulario['correo'];
    this.cadenaACTUALIZAR['contrasena'] = formulario['contrasena'];

    this.servicio.actualizarUsuario(formulario['idUsuario'], this.cadenaACTUALIZAR).subscribe((datos) => {
      console.log(datos);
      if(datos['message'] == "Success"){
        this.errorVerificacion = true;
        this.mensajeError = "Datos actualizados a usuario con id " + formulario['idUsuario']
      }
      else{
        this.errorVerificacion = true;
        this.mensajeError = "Usuario no encontrado" 
      }
    });
  }

  ngOnInit() {
  }

}
