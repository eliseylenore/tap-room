import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg';

@Component({
  selector: 'keg-list',
  template: `
  <div *ngFor='let keg of childKegList' >
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
}
