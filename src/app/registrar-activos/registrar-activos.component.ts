import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Activos } from '../activos';
import { ActivosService } from '../activos.service';

@Component({
  selector: 'app-registrar-activos',
  templateUrl: './registrar-activos.component.html',
  styleUrls: ['./registrar-activos.component.css']
})


export class RegistrarActivosComponent implements OnInit {
  activos: Activos = new Activos()
  constructor(private activosService:ActivosService,private router:Router){
   
  }
  guardarActivo(){
    this.activosService.registrarActivo(this.activos).subscribe(dato => {
      console.log(dato);
      this.irALaListaDeActivos();
    },error => console.log(error));
  }
  irALaListaDeActivos(){
    this.router.navigate(['/activos']);
    //swal('Empleado registrado',`El empleado ${this.activos.nombre} ha sido registrado con exito`,`success`);
  }

  ngOnInit(): void{
      }
  onSubmit(){
    console.log(this.activos);
    this.guardarActivo();
    

  }
}





