import { Component } from '@angular/core';



@Component({
selector: 'app-heroe',
templateUrl: 'heroe.component.html'
})
export class HeroeComponent{
nombre: string= "Iron man";
edad: number= 30;

get nombreCapitalizado(): string{
  return this.nombre.toUpperCase();
}

obtenerNombre(): string{
  return `${this.nombre}-${this.edad}`;
}

CambiarNombre(): void{
  this.nombre= "Spaiderman";
}
CambiarEdad(): void{
  this.edad= 20;
}
}
