import { Component } from '@angular/core';
import { Keg } from './keg';

@Component({
  selector: 'app-root',
  template: `
  <div class='container'>
    <h1>Tap-Room </h1>
    <button class="btn btn-info" (click)="newKegForm()" *ngIf = '!showNewKegForm'>Add New Keg</button>
    <div *ngIf = 'showNewKegForm' class="form-group">
      <input [(ngModel)]="newKeg.name" class='form-control'>
      <input [(ngModel)]="newKeg.brand" class='form-control'>
      <input [(ngModel)]="newKeg.price" class='form-control'>
      <input [(ngModel)]="newKeg.alcoholContent" class='form-control'>
      <button (click)='finishedAddNewKeg()' class="btn btn-info">Add</button>
    </div>
    <div class='panel' *ngFor='let keg of kegs'>
      <h2>{{keg.name}}<span (click)="decreasePints(keg)" class="glyphicon glyphicon-triangle-bottom"></span></h2>
      <h3>{{keg.brand}}, \${{keg.price}}/pint</h3>
      <p>{{keg.alcoholContent}}%, {{keg.pints}} pints</p>
      <button class="btn btn-info" (click)="editKeg(keg)">Edit</button>
    </div>
    <div *ngIf = "showEditForm">
      <input [(ngModel)]="selectedKeg.name" class='form-control'>
      <input [(ngModel)]="selectedKeg.brand" class='form-control'>
      <input [(ngModel)]="selectedKeg.price" class='form-control'>
      <input [(ngModel)]="selectedKeg.alcoholContent" class='form-control'>
      <button (click)='finishedEdit()' class="btn btn-info">Add</button>
    </div>
  </div>
  `
})

export class AppComponent {
  kegs: Keg[] = [new Keg("Awesome Keg", "Renee\'s Brewery", 20, 10), new Keg("Billy Bobs IPA", "Valley Broth", 15, 8), new Keg("Stormy Weather Stout", "Grinil's Place", 8, 5)];
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

  finishedAddNewKeg(){
    this.kegs.push(new Keg(this.newKeg.name, this.newKeg.brand, this.newKeg.price, this.newKeg.alcoholContent));
    this.showNewKegForm = false;
    this.newKeg = new Keg(null , null , null , null);
  }

  finishedEdit(){
    this.showEditForm = false;
  }

  decreasePints(keg) {
    keg.pints -= 1;
  }
}
