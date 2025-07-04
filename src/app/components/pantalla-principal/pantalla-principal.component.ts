import {Component, OnDestroy, OnInit, inject} from '@angular/core';
import {ApiService} from '../../services/api.service';
import {TablaPrincipalComponent} from '../tabla-principal/tabla-principal.component';
import {GetJugadoresDTO} from '../../models/models';
import {Subscription} from 'rxjs';
import {Router} from '@angular/router';
import {Filtros, FiltrosComponent} from '../filtros/filtros.component';

class Subscriptions {
}

@Component({
  selector: 'app-pantalla-principal',
  imports: [
    TablaPrincipalComponent,
    FiltrosComponent
  ],
  templateUrl: './pantalla-principal.component.html',
})
export class PantallaPrincipalComponent implements OnInit, OnDestroy {

  listadoJugadores: GetJugadoresDTO[] = []
  private apiService = inject(ApiService);
  private router = inject(Router);

  subscriptions: Subscription = new Subscription();

  ngOnInit() {
      this.apiService.getJugadores().subscribe({

        next: (jugadores: GetJugadoresDTO[]) => {
          this.listadoJugadores = jugadores;
        },
        error: (error: Error) => console.error('No se obtuvieron jugadores :(', error),
      })

  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }

  redirigirClub(id: number) {
    this.router.navigate(['/club', id]);
  }

  redirigirEstadisticas(id: number) {
    this.router.navigate(['/estadisticas', id]);
  }


  aplicarFiltros(filtros: Filtros) {
    console.log({filtros});
    this.apiService.getJugadores(filtros.club,filtros.posicion,filtros.desde,filtros.hasta).subscribe({
      next: (jugadores: GetJugadoresDTO[]) => {
        this.listadoJugadores = jugadores;
      },
      error: (error: Error) => console.error('No se obtuvieron jugadores :(', error),
    })
  }
}
