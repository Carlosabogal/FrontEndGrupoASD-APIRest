import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaActivosComponent } from './lista-activos/lista-activos.component';
import { RegistrarActivosComponent } from './registrar-activos/registrar-activos.component';

const routes: Routes = [
  {path:'activos',component:ListaActivosComponent},
  {path:'',redirectTo:'activos',pathMatch:'full'},
  {path:'registrar-activos',component:RegistrarActivosComponent},
  {path:'actualizar-activos/:id',component:RegistrarActivosComponent},
  {path:'activos-detalles/:id',component:RegistrarActivosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
