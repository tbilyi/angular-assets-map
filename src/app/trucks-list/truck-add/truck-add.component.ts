import { Component, ViewChild } from '@angular/core';

import { Truck } from '../../shared/truck.model';

import { Store } from '@ngrx/store';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import * as fromApp from '../../store/app.reducer';
import * as TrucksListActions from '../store/trucks-list.actions';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-truck-add',
  templateUrl: './truck-add.component.html',
  styleUrls: ['./truck-add.component.css']
})

export class TruckAddComponent  {
  @ViewChild('f', { static: false }) slForm: NgForm;
  subscription: Subscription;

  constructor(
    private store: Store<fromApp.AppState>,
    private modalService: NgbModal
  ) {}

  onSubmit(form: NgForm) {
    const value = form.value;
    const newTruck = new Truck(Math.random(), value.name, value.latitude, value.longitude);
    this.store.dispatch(new TrucksListActions.AddTruck(newTruck));
    this.modalService.dismissAll();
    form.reset();
  }

  open(content) {
    this.modalService.open(content);
  }

}
