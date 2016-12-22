import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Card } from '../../memory-game/memory-game.model';

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardComponent {
    @Input() card: Card;
    @Output() cardClicked: EventEmitter<number> = new EventEmitter();
}
