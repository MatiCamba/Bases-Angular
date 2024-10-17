import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-add-character',
  templateUrl: './add-character.component.html',
  styleUrl: './add-character.component.css'
})
export class AddCharacterComponent {

  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();

  public newCaracter: Character = {
    name: '',
    power: 0
  };

  emitNewCharacter() :void {

    //debugger; // se utiliza para hacer un breakpoint en el navegador

    if (this.newCaracter.name.trim().length === 0) {
      return;
    }
    this.onNewCharacter.emit(this.newCaracter);

    this.newCaracter = {
      name: '',
      power: 0
    }
  }
}
