import { ActionReducerMap } from '@ngrx/store';

import * as fromTrucksList from '../trucks-list/store/trucks-list.reducer';

export interface AppState {
  trucksList: fromTrucksList.State;
}

export const appReducer: ActionReducerMap<AppState> = {
  trucksList: fromTrucksList.trucksListReducer,
};
