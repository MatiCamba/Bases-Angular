import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './heroes-list.component.html',
  styleUrl: './heroes-list.component.css'
})
export class HeroesListComponent {
  public heroNames:string[] = ['ironman', 'spiderman', 'thor', 'hulk', 'captain america'];

  public deleteHero?: string;

  public removeLastHero() : void {
    this.deleteHero = this.heroNames.pop();

  }
}
