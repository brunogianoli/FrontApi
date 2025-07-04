import {Component, inject, NgModule, OnInit} from '@angular/core';
import {GetEstadisticasJugadorDTO, PutEstadisticasDTO} from '../../models/models';
import {ApiService} from '../../services/api.service';
import {ActivatedRoute, Router} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {Subscription} from 'rxjs';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-estadisticas',
  standalone : true,
  imports: [FormsModule, NgIf],
  templateUrl: './estadisticas.component.html',
})
export class EstadisticasComponent implements OnInit {

  estadisticas: GetEstadisticasJugadorDTO | null = null;
  estadisticaUpdate: PutEstadisticasDTO = {
    cantidadGoles : 0,
    partidosJugados: 0,
    piernaHabil: ""
  }
  subscriptions: Subscription = new Subscription();
  errorMensaje: string | null = null;
  piernasHabiles: string[] = ['Derecha', 'Izquierda', 'Ambidiestro'];

  private apiService = inject(ApiService);
  private route = inject(ActivatedRoute);
  private router = inject(Router)

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    if (id) {
      this.subscriptions.add(
        this.apiService.getEstadisticasPorId(id).subscribe({
          next: (estadistica: GetEstadisticasJugadorDTO) => {
            this.estadisticas = estadistica;
            this.estadisticaUpdate = {
              cantidadGoles: estadistica.cantidadGoles,
              partidosJugados: estadistica.partidosJugados,
              piernaHabil: estadistica.piernaHabil
            };
            console.log("", this.estadisticas);
          },
          error: (error ) => {
            console.error("No se pudo obtener la estadistica", error)
          }
        })
      )
    }
  }
  actualizarEstadistica(){
    const id = Number(this.route.snapshot.paramMap.get('id'));
    console.log('Estadisticas cambiadas:', this.estadisticaUpdate);
    this.subscriptions.add(
      this.apiService.putEstadisticasJugador(id, this.estadisticaUpdate).subscribe({
        next: () =>{
          console.log('Estadisticas enviadas correctamente');
        },
        error: (error) => {
          console.error('Informacion de actualizacion', error);
          if (typeof error.error?.text === 'string') {
            this.errorMensaje = error.error.text;
          }
          else {
            this.errorMensaje = 'Error desconocido al actualizar estadísticas.';
          }
        }
      })
    )
  }
}
