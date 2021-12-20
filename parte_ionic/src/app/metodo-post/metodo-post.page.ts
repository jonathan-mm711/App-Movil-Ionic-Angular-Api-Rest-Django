import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../services/usuarios.service';

//formularios del video (link en appmodules)
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-metodo-post',
  templateUrl: './metodo-post.page.html',
  styleUrls: ['./metodo-post.page.scss'],
})
export class MetodoPOSTPage implements OnInit {

  loginForm = new FormGroup({
    correo : new FormControl('', Validators.required),
    contrasena : new FormControl('', Validators.required)
  })

  // cadenaPost= {
  //   "tipo": "crear",
  //   "correo":"creadoDesdeApp@prueba2.org",
  //   "contrasena":"appppp"
  // };
  cadenaPost={}

  constructor(private servicio: UsuariosService) { }

  postUsuario(formulario){
    formulario['tipo'] = 'crear'
    this.servicio.postearUsuario(formulario).subscribe((datos) => {
      console.log(datos);
    });
  }
  
  

  ngOnInit() {
  }

}
