import { Component } from '@angular/core';
import { Keg } from './keg';
import { KegListComponent } from './keg-list.component';

@Component({
  selector: 'app-root',
  template: `
  <div class='container'>
    <h1>Tap-Room </h1>
    <button class="btn btn-info" (click)="newKegForm()" *ngIf = '!showNewKegForm'>Add New Keg</button>
    <div *ngIf = 'showNewKegForm'>
      <div  class="form-group">
        <input [(ngModel)]="newKeg.name" class='form-control' placeholder="Keg name">
      </div>
      <div  class="form-group">
        <input [(ngModel)]="newKeg.brand" class='form-control' placeholder="Brand">
      </div>
      <div  class="form-group">
        <input [(ngModel)]="newKeg.price" class='form-control' placeholder="Price(per pint)">
      </div>
      <div class="form-group">
        <input [(ngModel)]="newKeg.alcoholContent" class='form-control' placeholder="Percentage alcohol">
      </div>
      <button (click)='finishedAddNewKeg()' class="btn btn-info">Add</button>
    </div>
    <keg-list [childKegList]="masterKegList" (clickSender)="editKeg($event)"></keg-list>
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

  newKegForm(){
    this.showNewKegForm = true;
  }

  // finishedAddNewKeg(){
  //   this.egs.push(new Keg(this.newKeg.name, this.newKeg.brand, this.newKeg.price, this.newKeg.alcoholContent));
  //   this.showNewKegForm = false;
  //   this.newKeg = new Keg(null , null , null , null);
  // }
}
