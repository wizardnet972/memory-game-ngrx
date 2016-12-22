import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { RevealCardAction } from '../../memory-game/memory-game.actions';
import { Card } from '../../memory-game/memory-game.model';
import { State, getCardsEntities, getWinningStatus } from '../../../shared/store';

@Component({
    selector: 'app-memory-game',
    templateUrl: './memory-game.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class MemoryGameComponent {
    cards$: Observable<Card[]>;

    constructor(
        public store: Store<State>) {

        this.cards$ = store.select(getCardsEntities);

        store.select(getWinningStatus)
            .filter(winning => !!winning)
            .delay(300)
            .subscribe(this.onWinning);
    }

    reveal(cardIndex: number) {
        this.store.dispatch(new RevealCardAction({ cardIndex }));
    }

    onWinning() {
        alert('Yeah! Good job! You did it!');
    }
}
