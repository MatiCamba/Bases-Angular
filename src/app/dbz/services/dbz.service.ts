
import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';

import { Character } from '../interfaces/character.interface';

@Injectable({
  providedIn: 'root'
})

export class DbzService {

  public characters: Character[] = [
    {
      id: uuid(),
      name: 'Goku',
      power: 15000
    },
    {
      id: uuid(),
      name: 'Vegeta',
      power: 7500
    },
    {
      id: uuid(),
      name: 'Trunks',
      power: 7000
    },
    {
      id: uuid(),
      name: 'Piccolo',
      power: 5000
    },
    {
      id: uuid(),
      name: 'Gohan',
      power: 4000
    },
  ]

  addCharacter(character: Character): void {
    const newCharacter = {
      ...character,
      id: uuid()
    }
    this.characters.push(newCharacter);
  }

  /* onDeleteCharacter( index: number) {
    this.characters.splice(index, 1);
  } */

  deleteCharacterById( id: string ) {
    this.characters = this.characters.filter( character => character.id !== id );
  }

}
