import { Action } from '@ngrx/store';
import { type } from '../../shared/util';
import { Card } from './memory-game.model';

export const ActionTypes = {
  LOAD_CARDS: type('[Game] Load Cards'),
  LOAD_CARDS_SUCCESS: type('[Game] Load Cards Success'),
  REVEAL_CARD: type('[Game] Reveal Card'),
  PICK_CARD: type('[Game] Pick Card'),
  MATCH: type('[Game] Match'),
  NO_MATCH: type('[Game] No Match'),
  WINNING: type('[Game] Winning'),
};

export class LoadCardsAction implements Action {
  type = ActionTypes.LOAD_CARDS;

  constructor(public payload?: any) { }
}

export class LoadCardsSuccessAction implements Action {
  type = ActionTypes.LOAD_CARDS_SUCCESS;

  constructor(public payload: { cards: Card[] }) { }
}

export class RevealCardAction implements Action {
  type = ActionTypes.REVEAL_CARD;

  constructor(public payload: { cardIndex: number }) { }
}

export class PickCardAction implements Action {
  type = ActionTypes.PICK_CARD;

  constructor(public payload: { cardIndex: number }) { }
}

export class NoMatchAction implements Action {
  type = ActionTypes.NO_MATCH;

  constructor(public payload?: any) { }
}

export class MatchAction implements Action {
  type = ActionTypes.MATCH;

  constructor(public payload: { cardIndex: number }) { }
}

export class WinningAction implements Action {
  type = ActionTypes.WINNING;

  constructor(public payload?: any) { }
}

export type Actions
  = LoadCardsAction
  | LoadCardsSuccessAction
  | RevealCardAction
  | PickCardAction
  | NoMatchAction
  | MatchAction
  | WinningAction
  ;
