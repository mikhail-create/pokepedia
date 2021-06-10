import { Component } from '@angular/core';
import { ListPokemons } from './card/card.component';
import { pokemons } from './pokemons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pokedex';

  ListPokemons: ListPokemons[] = pokemons;
}

