import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { State } from '../shared/store';
import { CardsService } from './memory-game.service';
import * as fromMemoryGame from './memory-game.actions';

@Injectable()
export class MemoryGameEffects {

  @Effect() loadCards$ = this.actions$
    .ofType(fromMemoryGame.ActionTypes.LOAD_CARDS)
    .startWith(new fromMemoryGame.LoadCardsAction())
    .switchMap(() =>
      this.cards.getCards()
        .map(cards => new fromMemoryGame.LoadCardsSuccessAction({ cards }))
    );

  @Effect() revealCard$ = this.actions$
    .ofType(fromMemoryGame.ActionTypes.REVEAL_CARD)
    .map(action => new fromMemoryGame.PickCardAction(action.payload));

  @Effect() pickCard$ = this.actions$
    .ofType(fromMemoryGame.ActionTypes.PICK_CARD)
    .withLatestFrom(this.store)
    .filter(([, store]) => store.memory.cards.filter(c => c.picked && !c.matched).length > 1)
    .map(([action, store]) => {
      let id = store.memory.cards[action.payload.cardIndex].id;
      let pickedCards = store.memory.cards.filter(c => c.id === id && c.picked);

      return (pickedCards.length === 2)
        ? new fromMemoryGame.MatchAction(action.payload)
        : new fromMemoryGame.NoMatchAction();
    })
    .delay(300);

  @Effect() winning$ = this.actions$
    .ofType(fromMemoryGame.ActionTypes.MATCH)
    .withLatestFrom(this.store)
    .filter(([, store]) => store.memory.cards.every(c => c.matched))
    .map(() => new fromMemoryGame.WinningAction());

  constructor(
    private store: Store<State>,
    private actions$: Actions,
    private cards: CardsService
  ) { }
}
