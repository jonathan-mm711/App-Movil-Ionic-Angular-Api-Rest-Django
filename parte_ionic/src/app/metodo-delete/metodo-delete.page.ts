import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../services/usuarios.service';

//formularios del video (link en appmodules)
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-metodo-delete',
  templateUrl: './metodo-delete.page.html',
  styleUrls: ['./metodo-delete.page.scss'],
})
export class MetodoDELETEPage implements OnInit {

  constructor(private servicio: UsuariosService) { }

  loginForm = new FormGroup({
    idUsuario : new FormControl('', Validators.required)
  })

  errorVerificacion: Boolean = false;
  mensajeError: any = "holi"

  idUsuario = ''
  borraUsuario(formulario){
    this.idUsuario = formulario['idUsuario'];
    this.servicio.borrarUsuario(this.idUsuario).subscribe((datos) => {
      if(datos['message'] == 'Usuario no encontrado'){
        this.errorVerificacion = true;
        this.mensajeError = "Usuario no existe"
      }
      else{
        this.errorVerificacion = true;
        this.mensajeError = "Usuario con el id " + this.idUsuario + " borrado exitosamente!"
      }
    })
  } 

  ngOnInit() {
  }

}
