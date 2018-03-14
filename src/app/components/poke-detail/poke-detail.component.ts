import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from '@services/pokemon.service';
import { Pokemon } from '@domain/pokemon';

@Component({
  selector: 'app-poke-detail',
  templateUrl: './poke-detail.component.html',
  styleUrls: ['./poke-detail.component.css']
})
export class PokeDetailComponent implements OnInit {

  public pokemon: Pokemon;

  constructor(private pokemonService: PokemonService, private route: ActivatedRoute) {
    this.pokemon = {} as Pokemon;
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.pokemonService.findById(params.id)
        .then(pokemon => {
          console.log(pokemon);
          this.pokemon = pokemon;
        });
    });
  }
}
