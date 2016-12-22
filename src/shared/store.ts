import { createSelector } from 'reselect';
import { environment } from '../environments/environment';
import { compose } from '@ngrx/core/compose';
import { storeFreeze } from 'ngrx-store-freeze';
import { combineReducers } from '@ngrx/store';

import * as fromRouter from '@ngrx/router-store';
import * as fromMemory from '../app/memory-game/index';

export interface State {
  memory: fromMemory.State;
  router: fromRouter.RouterState;
};

const reducers = {
  memory: fromMemory.reducer,
  router: fromRouter.routerReducer,
};

const developmentReducer = compose(storeFreeze, combineReducers)(reducers);
const productionReducer = combineReducers(reducers);

export function rootReducer(state: any, action: any) {
  if (environment.production) {
    return productionReducer(state, action);
  } else {
    return developmentReducer(state, action);
  }
}

// Reset Store: http://stackoverflow.com/questions/35622588/how-to-reset-the-state-of-a-redux-store
export function reducer(state: any, action: any) {
  if (action.type === 'RESET_STORE') {
    state = undefined;
  }

  return rootReducer(state, action);
};

export const getMemoryGameState = (state: State) => state.memory;

export const getCardsEntities = createSelector(getMemoryGameState, fromMemory.getCards);

export const getWinningStatus = createSelector(getMemoryGameState, fromMemory.getWinning);
