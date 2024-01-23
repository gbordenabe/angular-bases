import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 } from 'uuid'

@Injectable({providedIn: 'root'})
export class DbzService {
  public characters: Character[] = [
    {
      id: v4(),
      name: 'Krillin',
      power: 1000
    },
    {
      id: v4(),
      name: 'Goku',
      power: 15000
    },
    {
      id: v4(),
      name: 'Vegeta',
      power: 8500
    }
  ]

    onNewCharacter(character:Character):void{
      const newCharacter = {...character, id: v4()};
      this.characters.push(newCharacter);
    }

    onDeleteCharacter(id: string):void{
      this.characters = this.characters.filter((character) => character.id !== id);
    }

}
