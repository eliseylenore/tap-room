import { Component } from '@angular/core';
import { Keg } from './keg';

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
    <h1>Treat Yo'self (Over $10)</h1>
    <div *ngFor='let keg of kegs' >
      <div *ngIf = "keg.price > 9" [class]="alcoholCompare(keg)">
        <h2>{{keg.name}}<span (click)="decreasePints(keg)" class="glyphicon glyphicon-triangle-bottom"></span></h2>
        <h3>{{keg.brand}}, \${{keg.price}}/pint</h3>
        <p>{{keg.alcoholContent}}%, <span [class]="alert(keg)">{{keg.pints}}</span> pints</p>
        <button class="btn btn-info" (click)="editKeg(keg)">Edit</button>
      </div>
    </div>
    <h1>Cheapos (Under $10)</h1>
    <div *ngFor='let keg of kegs' >
      <div *ngIf = "keg.price < 9" [class]="alcoholCompare(keg)">
        <h2>{{keg.name}}<span (click)="decreasePints(keg)" class="glyphicon glyphicon-triangle-bottom"></span></h2>
        <h3>{{keg.brand}}, \${{keg.price}}/pint</h3>
        <p>{{keg.alcoholContent}}%, <span [class]="alert(keg)">{{keg.pints}}</span> pints</p>
        <button class="btn btn-info" (click)="editKeg(keg)">Edit</button>
      </div>
    </div>
    <div *ngIf = "showEditForm">
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
  kegs: Keg[] = [new Keg("Awesome Keg", "Renee\'s Brewery", 20, 10), new Keg("Billy Bobs IPA", "Valley Broth", 15, 8), new Keg("Stormy Weather Stout", "Grinil's Place", 8, 3)];
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

  alert(keg) {
    if (keg.pints <= 10){
      return "red";
    } else {
      return "normal";
    }
  }

  alcoholCompare(keg) {
    if (keg.alcoholContent >= 10) {
      return "bg-danger box";
    }else if (keg.alcoholContent >= 5) {
      return "bg-warning box";
    }else {
      return "bg-info box";
    }
  }
}
