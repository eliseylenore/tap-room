import { Component } from '@angular/core';
import { Keg } from './keg';
import { KegListComponent } from './keg-list.component';
import { NewKegComponent} from './new-keg.component';

@Component({
  selector: 'app-root',
  template: `
  <div class='container'>
    <h1>Tap-Room </h1>
    <keg-list [childKegList]="masterKegList" (clickSender)="editKeg($event)"></keg-list>
    <new-keg (newKegSender)="addKeg($event)"></new-keg>
    <div *ngIf = "selectedKeg.name">
      <div class="form-group">
        <input [(ngModel)]="selectedKeg.name" class='form-control'>
      </div>
      <div class="form-group">
        <input [(ngModel)]="selectedKeg.brand" class='form-control'>
      </div>
      <div class="form-group">
        <input [(ngModel)]="selectedKeg.price" class='form-control'>
      </div>
      <div class="form-group">
        <input [(ngModel)]="selectedKeg.alcoholContent" class='form-control'>
      </div>
      <button (click)='finishedEdit()' class="btn btn-info">Finish</button>
    </div>
  </div>
  `
})

export class AppComponent {
  masterKegList: Keg[] = [new Keg("Awesome Keg", "Renee\'s Brewery", 20, 10), new Keg("Billy Bobs IPA", "Valley Broth", 15, 8), new Keg("Stormy Weather Stout", "Grinil's Place", 8, 3)];
  selectedKeg: Keg = new Keg(null , null , NaN , NaN);
  showNewKegForm: boolean = false;
  showEditForm: boolean = false;
  newKeg: Keg = new Keg(null , null , null , null);

  editKeg(keg){
    this.showEditForm = true;
    this.selectedKeg = keg;
  }

  addKeg(newKegFromChild: Keg) {
    this.masterKegList.push(newKegFromChild);
  }
}
