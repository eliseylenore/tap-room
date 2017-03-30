import { Component } from '@angular/core';
import { Keg } from './keg';
import { KegListComponent } from './keg-list.component';
import { NewKegComponent} from './new-keg.component';

@Component({
  selector: 'app-root',
  template: `
  <div class='container'>
    <h1>Tap-Room </h1>
    <keg-list [childKegList]="masterKegList" (clickSender)="selectEditKeg($event)"></keg-list>
    <new-keg (newKegSender)="addKeg($event)"></new-keg>
    <edit-keg [selectedKegChild]="selectedKeg" (editClickSender)="finishEditKeg($event)"></edit-keg>
  </div>
  `
})

export class AppComponent {
  masterKegList: Keg[] = [new Keg("Awesome Keg", "Renee\'s Brewery", 20, 10), new Keg("Billy Bobs IPA", "Valley Broth", 15, 8), new Keg("Stormy Weather Stout", "Grinil's Place", 8, 3)];
  selectedKeg: Keg = new Keg(null , null , NaN , NaN);

  selectEditKeg(keg){
    this.selectedKeg = keg;
  }

  finishEditKeg(){
    this.selectedKeg = new Keg(null , null , NaN , NaN);
  }

  addKeg(newKegFromChild: Keg) {
    this.masterKegList.push(newKegFromChild);
  }
}
