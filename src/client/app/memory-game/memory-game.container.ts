import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { RevealCardAction } from './memory-game.actions';
import { Card } from './memory-game.model';
import { State } from '../shared/store';

@Component({
    moduleId: module.id,
    selector: 'memory-game',
    templateUrl: 'memory-game.container.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class MemoryGameContainer {
    private cards: Observable<Card[]>;

    constructor(
        public store: Store<State>) {

        this.cards = store.select(s => s.memory.cards);

        store.select(s => s.memory.winning)
            .filter(winning => !!winning)
            .delay(300)
            .subscribe(this.onWinning);
    }

    cardClicked(event: MouseEvent, cardIndex: number | any) {
        let target = (<Element>(event.currentTarget)).children[0];
        let prevent = target.classList.contains('picked') || target.classList.contains('matched');

        if (!prevent)
            this.reveal(parseInt(cardIndex, 10));
    }

    reveal(cardIndex: number) {
        this.store.dispatch(new RevealCardAction({ cardIndex }));
    }

    onWinning() {
        alert('Yeah! Good job! You did it!');
    }
}
