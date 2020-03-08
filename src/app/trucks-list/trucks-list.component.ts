import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Truck } from '../shared/truck.model';
import { Store } from '@ngrx/store';
import * as fromApp from '../store/app.reducer';
import * as TrucksListActions from './store/trucks-list.actions';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'trucks-list',
  templateUrl: './trucks-list.component.html',
  styleUrls: ['./trucks-list.component.css']
})
export class TrucksListComponent implements OnInit {
  trucks: Observable<{ trucks: Truck[] }>;
  searchText: string;
  name: string;
  latitude = 50.447747; 
  longitude = 30.501775;
  truckNumber: number;
  truckName: string;

  constructor(
    private store: Store<fromApp.AppState>,
    private modalService: NgbModal
  ) {}

  ngOnInit() {
    this.trucks = this.store.select('trucksList');
  }
  onEditItem(truck) {
    this.latitude = truck.latitude;
    this.longitude = truck.longitude;
  }

  onDeleteItem() {
    this.store.dispatch(new TrucksListActions.DeleteTruck(this.truckNumber));
    this.modalService.dismissAll();
  }

  open(content, id: number, name: string) {
    this.modalService.open(content);
    this.truckNumber = id;
    this.truckName = name;
  }

}
