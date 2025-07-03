import { Routes } from '@angular/router';
import {PantallaPrincipalComponent} from './components/pantalla-principal/pantalla-principal.component';
import {EstadisticasComponent} from './components/estadisticas/estadisticas.component';
import {ClubComponent} from './components/club/club.component';

export const routes: Routes = [

  {
    path: "pantalla-principal",
    component: PantallaPrincipalComponent,
  },
  {
    path: "estadisticas/:id",
    component: EstadisticasComponent,
  },
  {
    path: "club/:id",
    component: ClubComponent,
  },
  {
    path: "**",
    redirectTo: "pantalla-principal",
  }
];
