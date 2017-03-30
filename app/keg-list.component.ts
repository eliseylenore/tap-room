import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg';

@Component({
  selector: 'keg-list',
  template: `
  <ul class="nav nav-tabs" >
    <li role="presentation"  class="active" (click)="setFilter('allKegs')" ><a href="#">All Kegs</a></li>
    <li role="presentation" (click)="setFilter('cheaperKegs')" ><a href="#">Cheaper Kegs</a></li>
    <li role="presentation" (click)="setFilter('spendyBrews')" ><a href="#">Spendy Brews</a></li>
  </ul>
  <div *ngFor='let keg of childKegList | price: filterByPrice'>
    <div [class]="alcoholCompare(keg)">
      <h2>{{keg.name}}<span (click)="decreasePints(keg)" class="glyphicon glyphicon-triangle-bottom"></span></h2>
      <h3>{{keg.brand}}, \${{keg.price}}/pint</h3>
      <p>{{keg.alcoholContent}}%, <span [class]="alert(keg)">{{keg.pints}}</span> pints</p>
      <button class="btn btn-info" (click)="editButtonClicked(keg)">Edit</button>
    </div>
  </div>
  `
})

export class KegListComponent {
  @Input() childKegList: Keg[];
  @Output() clickSender = new EventEmitter();
  filterByPrice: string = "allKegs";

  editButtonClicked(kegToEdit: Keg) {
    this.clickSender.emit(kegToEdit);
  }

  // finishedEdit(){
  //   this.showEditForm = false;
  // }

  decreasePints(keg) {
    keg.pints -= 1;
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

  alert(keg) {
    if (keg.pints <= 10){
      return "red";
    } else {
      return "normal";
    }
  }

  setFilter(value) {
    this.filterByPrice=value;
  }
}
