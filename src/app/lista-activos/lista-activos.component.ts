import { Component } from '@angular/core';
import { Activos } from '../activos';
import { ActivosService } from '../activos.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-lista-activos',
  templateUrl: './lista-activos.component.html',
  styleUrls: ['./lista-activos.component.css']
})
export class ListaActivosComponent {
  activos:Activos[];
  constructor(private activosServicio:ActivosService,private router:Router){
   
  }

  ngOnInit(): void{

    this.obtenerActivos();
    

  }

  actualizarEmpleado(id:number){
    this.router.navigate(['actualizar-activos',id]);
  }

  private obtenerActivos(){
    this.activosServicio.obtenerListaDeActivos().subscribe(dato => {
      this.activos = dato;
      console.log(dato);
      
    });
  }

  verDetallesDelActivo(id:number){
    this.router.navigate(['activos-detalles',id]);
  }

}
