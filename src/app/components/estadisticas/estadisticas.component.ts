import {Component, inject, OnInit} from '@angular/core';
import {GetEstadisticasJugadorDTO} from '../../models/models';
import {ApiService} from '../../services/api.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-estadisticas',
  imports: [],
  templateUrl: './estadisticas.component.html',
  styleUrl: './estadisticas.component.css'
})
export class EstadisticasComponent implements OnInit {

  estadisticas: GetEstadisticasJugadorDTO | null = null;

  private apiService = inject(ApiService);
  private route = inject(ActivatedRoute);

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    if (id) {

      this.apiService.getEstadisticasPorId(id).subscribe({
        next: (estadistica: GetEstadisticasJugadorDTO) => {

          this.estadisticas = estadistica;
          console.log("", this.estadisticas);
        },
        error: (error ) => {
          console.error("No se pudo obtener la estadistica", error)
        }
      })
    }


  }

}
