import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg';

@Component ({
  selector: 'edit-keg',
  template: `
  <div *ngIf = "selectedKegChild.name">
    <div class="form-group">
      <input [(ngModel)]="selectedKegChild.name" class='form-control'>
    </div>
    <div class="form-group">
      <input [(ngModel)]="selectedKegChild.brand" class='form-control'>
    </div>
    <div class="form-group">
      <input [(ngModel)]="selectedKegChild.price" class='form-control'>
    </div>
    <div class="form-group">
      <input [(ngModel)]="selectedKegChild.alcoholContent" class='form-control'>
    </div>
    <button (click)='finishedEdit()' class="btn btn-info">Finish</button>
  </div>
  `
})

export class EditKegComponent {
  @Input() selectedKegChild: Keg;
  @Output() editClickSender = new EventEmitter();

  finishedEdit() {
    this.editClickSender.emit();
  }
}
