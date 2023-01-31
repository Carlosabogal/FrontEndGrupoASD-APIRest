import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Activos } from './activos';

@Injectable({
  providedIn: 'root'
})
export class ActivosService {

  //Esta URL obtiene el listado de todos los activos en el backend
  private baseURL = "http://localhost:8080/api/ActivosASD/getlist";
  private baseURL2 = "http://localhost:8080/api/ActivosASD/post";

  constructor(private httpClient: HttpClient) { }

  //este metodo nos sirve para obtener los activos
  obtenerListaDeActivos():Observable<Activos[]>{
    return this.httpClient.get<Activos[]>(`${this.baseURL}`);

  }
  
  //este metodo nos sirve para registrar los activos
  registrarActivo(activos:Activos): Observable<Object>{
    return this.httpClient.post(`${this.baseURL2}`,activos);

  }

  //////////

    
    //este metodo sirve para actualizar el empleado
    actualizarEmpleado(id:number,empleado:Activos) : Observable<Object>{
      return this.httpClient.put(`${this.baseURL}/${id}`,empleado);
    }
  
    //este metodo sirve para obtener o buscar un empleado
    obtenerActivosPorId(id:number):Observable<Activos>{
      return this.httpClient.get<Activos>(`${this.baseURL}/${id}`);
    }
  
    eliminarEmpleado(id:number): Observable<Object>{
      return this.httpClient.delete(`${this.baseURL}/${id}`);
    }
}
