import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { Card } from '../../memory-game/memory-game.model';

@Component({
    selector: 'board',
    templateUrl: './board.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class BoardComponent {
    @Input() cards: Card[];
    @Output() reveal = new EventEmitter<number>();

    cardClicked(event: MouseEvent, cardIndex: number | any) {
        let target = (<Element>(event.currentTarget)).children[0];
        let prevent = target.classList.contains('picked') || target.classList.contains('matched');

        if (!prevent)
            this.reveal.emit(parseInt(cardIndex, 10));
    }
}