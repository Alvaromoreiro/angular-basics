import { Injectable } from "@angular/core";
import { Personaje } from "../interfaces/dbz.interface";


@Injectable()
export class DbzService {

    private _personajes: Personaje[] = [
        {
          nombre: 'Goku',
          poder: 10000
        },
        {
          nombre: 'Vegeta',
          poder: 7000
        }
    ];

    /**
     *  Este metodo devuelve los personajes realizando la destructuración de los mismos 
     *  para que no se pueda acceder directamente al objeto que devuelve 
     * 
     * @return {Personaje[]} personajes
     * */ 
    get personajes(): Personaje[] {
        return [...this._personajes];
    }

    /**
     *  Este metodo agrega un personje especificado por parametro a la lista de personajes
     * 
     * @param {Personaje} personaje : Personaje
     * */ 
    agregarPersonajes(personaje: Personaje){
      this._personajes.push( personaje );
    }
    
}