import { Component } from '@angular/core';
import { Keg } from './keg';

@Component({
  selector: 'app-root',
  template: `
  <div class='container'>
    <h1>Tap-Room</h1>
    <div class='panel' *ngFor='let keg of kegs'>
    <h2>{{keg.name}}</h2>
    <h3>{{keg.brand}}, \${{keg.price}}/pint</h3>
    <p>{{keg.alcoholContent}}%, {{keg.pints}} pints</p>
  </div>
  `
})

export class AppComponent {
  kegs: Keg[] = [new Keg("Awesome Keg", "Renee\'s Brewery", 20, 10), new Keg("Billy Bobs IPA", "Valley Broth", 15, 8), new Keg("Stormy Weather Stout", "Grinil's Place", 8, 5)];
}
