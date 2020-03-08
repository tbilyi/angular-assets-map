import { Action } from '@ngrx/store';

import { Truck } from '../../shared/truck.model';

export const ADD_TRUCK = '[Trucks List] Add Truck';
export const DELETE_TRUCK = '[Trucks List] Delete Truck';


export class AddTruck implements Action {
  readonly type = ADD_TRUCK;

  constructor(public payload: Truck) {}
}

export class DeleteTruck implements Action {
  readonly type = DELETE_TRUCK;
  
  constructor(public payload: number) {}
}

export type TrucksListActions =
  | AddTruck
  | DeleteTruck;
