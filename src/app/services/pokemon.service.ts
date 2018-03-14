import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { POKEMON_ENDPOINT } from '@config/constants';
import { Pokemon } from '@domain/pokemon';
import { environment } from '@environments/environment';

@Injectable()
export class PokemonService {

  constructor(private http: HttpClient) {}

  async findAll(): Promise<Pokemon[]> {
    let pokemons: any = await this.http.get(`${ environment.endpoint }/${ POKEMON_ENDPOINT.FIND_ALL }`).toPromise();
    return pokemons.data;
  }

  async findById(_id: string): Promise<Pokemon> {
    let pokemon: any = await this.http.get(`${ environment.endpoint }/${ POKEMON_ENDPOINT.FIND_BY_ID(_id) }`).toPromise();
    return pokemon.data;
  }
}
