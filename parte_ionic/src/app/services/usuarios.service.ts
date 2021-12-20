import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http' 
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  urlApi = 'http://127.0.0.1:8000/api/usuarios/';

  httpOptions = {
    headers: new HttpHeaders({
    //'Content-Type': 'application/json',
    //'Access-Control-Allow-Origin': '*'
    // 'Accept': '*/*'
  })
  }

  constructor(private http: HttpClient) {}
    
  getUsuarios(): Observable<any>
  {
    return this.http.get(this.urlApi);
  }
   
  postearUsuario(cadenaJSON): Observable<any>
  {      
    return this.http.post(this.urlApi , cadenaJSON);
  }

  actualizarUsuario(id,cadenaActualizar):Observable<any>{
    return this.http.put(this.urlApi+id,cadenaActualizar);
  }
  
  borrarUsuario(id): Observable<any>{
    return this.http.delete(this.urlApi + id)
  }

}