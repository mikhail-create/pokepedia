import { Output, Input, Component, OnInit } from '@angular/core';
import { pokemons } from '../pokemons';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  constructor() { }
  pokemons = pokemons;
  imgPath = ['../../assets/img/001.png', '../../assets/img/002.png'];

  showCard() {
    console.log("all works");
  }

  ngOnInit(): void {

  }

}
