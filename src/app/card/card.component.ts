import { Output, Input, Component, OnInit, Inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CardDetailComponent } from '../card-detail/card-detail.component';

export interface ListPokemons {
  id: number;
  name: string;
  path: string;
  type1: any;
  type2: any;
  stats : {
    attack: number,
    defense: number;
  }

}

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  constructor(public dialog: MatDialog,
              
    ) { }

  @Input()
  pokemons: ListPokemons[] = [];

  showCard(id: number, i: number, name: string, path: string, type1: any, type2: any, attack: number, defense: number) {
    if (type2 != "") {
      this.dialog.open(CardDetailComponent, {
        data: {
          id: i,
          name: name,
          path: path,
          type1: type1,
          type2: type2,
          attack: attack,
          defense: defense
        }
      });
    } else {
      this.dialog.open(CardDetailComponent, {
        data: {
          id: i,
          name: name,
          path: path,
          type1: type1,
          type2: "hidden",
          attack: attack,
          defense: defense
        }
      });
    }
    } 
    
  
  ngOnInit(): void {

  }

}
