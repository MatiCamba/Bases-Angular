

import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `<h3>Counter: {{ counter }}</h3>

  <button (click)="increaseBY()" >+1</button>
  <button class="mx-2" (click)="resetCounter()">Reset </button>
  <button (click)="decreaseBy()" >-1</button>`
})

export class CounterComponent {
  constructor() { }
  public counter = 10;

  increaseBY( ): void {
    this.counter += 1;
  }

  decreaseBy( ): void {
    this.counter -= 1;
  }

  resetCounter( ): void {
    this.counter = 10;
  }

}
