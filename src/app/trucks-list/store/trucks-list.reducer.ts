import { Truck } from '../../shared/truck.model';
import * as TrucksListActions from './trucks-list.actions';

export interface State {
  trucks: Truck[],
  latitude: number,
  longitude: number;
}

const initialState: State = {
  trucks: [
    new Truck(1, 'Truck 1001', 46.968810, 31.957536),
    new Truck(2, 'Truck 1002', 6.923463, 122.078770),
    new Truck(3, 'Truck 1003', -34.636551, -58.406627),
    new Truck(4, 'Truck 1004', -36.878692, 174.782927),
    new Truck(5, 'Truck 1005', 21.317799, -157.863967),
    new Truck(6, 'Truck 1006', 33.932971, -118.184870),
    new Truck(7, 'Truck 1007', 61.193976, -149.895978),
    new Truck(8, 'Truck 1008', 51.469459, -0.121203),
    new Truck(9, 'Truck 1009', 19.383402, -99.177722),
    new Truck(10, 'Truck 1010', -12.056608, -77.050116),
    new Truck(11, 'Truck 1011', -33.440251, -70.659052),
  ],
  latitude: 50.447747, 
  longitude: 30.501775,

};

export function trucksListReducer(
  state: State = initialState,
  action: TrucksListActions.TrucksListActions
) {
  switch (action.type) {
    case TrucksListActions.ADD_TRUCK:
      return {
        ...state,
        trucks: [...state.trucks, action.payload]
      };
    case TrucksListActions.DELETE_TRUCK:
      return {
        ...state,
        trucks: state.trucks.filter((ig) => {
          return ig.id !== action.payload;
        })
      };
    default:
      return state;
  }
}
