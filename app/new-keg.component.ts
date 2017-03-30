import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg';

@Component({
  selector: 'new-keg',
  template: `
  <button class="btn btn-info" (click)="newKegForm()" *ngIf = '!showNewKegForm'>Add New Keg</button>
  <div *ngIf = 'showNewKegForm'>
    <h2>Add a New Keg</h2>
    <div  class="form-group">
      <input #newName placeholder="Name">
    </div>
    <div  class="form-group">
      <input #newBrand placeholder="Brand">
    </div>
    <div  class="form-group">
      <input #newPrice placeholder="Price">
    </div>
    <div class="form-group">
      <input #newAlcoholContent placeholder="Alcohol Percentage">
    </div>
    <button (click)="finishedAddNewKeg(newName.value, newBrand.value, newPrice.value, newAlcoholContent.value); newName.value=''; newBrand.value=''; newPrice.value=''; newAlcoholContent.value=''" class="btn btn-info">Add</button>
  </div>
  `
})

export class NewKegComponent {
  @Output() newKegSender = new EventEmitter();

  showNewKegForm = false;

  newKegForm(){
    this.showNewKegForm = true;
  }

  finishedAddNewKeg(name: string, brand: string, price: number, alcoholContent: number){
    var newKegToAdd: Keg = new Keg(name, brand, price, alcoholContent);
    this.newKegSender.emit(newKegToAdd);
    this.showNewKegForm = false;
  }
}
