import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../services/usuarios.service';

@Component({
  selector: 'app-metodo-get',
  templateUrl: './metodo-get.page.html',
  styleUrls: ['./metodo-get.page.scss'],
})
export class MetodoGETPage implements OnInit {

  listadoUsuarios:any[]=[];

  constructor(private servicio: UsuariosService) {
    this.traerDatos();
   }

  traerDatos(){
    this.servicio.getUsuarios().subscribe((datos)=>{
      this.listadoUsuarios = datos;
      console.log(this.listadoUsuarios);
    });
  }

  ngOnInit() {
  }

}
