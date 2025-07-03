# Paso a paso
This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.2.14.

## FutbolApi
Guia paso a paso

## models.ts:

Se realiza la estructura de todos los DTOs 


## api.service

Se configura: inject httpClient, ApiUrl(puerto Back)

Contiene todos los metodos
getJugadores(){
return this.http.get<GetJugadoresDTO[]>(`${this.apiUrl}/jugadores`);(ruta del get en el back)
}

## app.html
RouterOutlet> <RouterOutlet

## app.config
se configura: provideHttpClient


## routes.ts
Se establecen las rutas/pantallas que va a tener nuestra web

## componente.ts
"Estructura basica"

export class Component implements OnInit, OnDestroy {
listadoJugadores: GetJugadoresDTO[] = []

private apiService = inject(ApiService);
private router = inject(Router);

subscriptions: Subscription = new Subscription();

ngOnInit() {}

ngOnDestroy(){}


## componente-principal.html
Si cuenta con un componente hijo como por ejemplo una tabla le debe pasar de esta manera:

<app-tabla-principal [jugadores] = listadoJugadores></app-tabla-principal>
 
listadoJugadores debe estar inicializado en el .ts

## componente-principal.ts

export class TablaPrincipalComponent {
@Input() jugadores: GetJugadoresDTO[] = []
}

## componente-principal.ts|ngOnInit()
ngOnInit() {
this.subscriptions.add(
this.apiService.getJugadores().subscribe({
        next: (jugadores: GetJugadoresDTO[]) => {
          this.listadoJugadores = jugadores;
        },
        error: (error: Error) => console.error('No se obtuvieron jugadores :(',error),
      })
    )

## componente-principal.ts|ngOnDestroy()
ngOnDestroy() {
this.subscriptions.unsubscribe();
}


















