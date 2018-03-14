import { Component, OnInit } from '@angular/core';
import { Pokemon } from '@domain/pokemon';
import { PokemonService } from '@services/pokemon.service';

@Component({
  selector: 'app-poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.css']
})
export class PokeListComponent implements OnInit {

  public pokedex: Pokemon[];

  constructor(private pokemonService: PokemonService) {
    this.pokedex = [];
  }

  async ngOnInit() {
    try {
      this.pokedex = await this.pokemonService.findAll();
    } catch(e) {}
  }
}
